import { loadInit } from './components/models/models.js';
// import { loadInit, loadNext1, loadNext2, loadNext3, loadNext4, loadNext5, loadNext6 } from './components/models/models.js';
// import { loadNext7, loadNext8, loadNext9, loadNext10, loadNext11, loadNext12 } from './components/models/models.js';
// import { loadNext13, loadNext14, loadNext15, loadNext16, loadNext17 } from './components/models/models.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let controls;
let renderer;
let scene;
let loop;

// let set0, set1, set2, set3, set4, set5, set6, set7, set8, set9, set10, set11, set12, set13, set14, set15, set16, set17;

// var sets = [set0, set1, set2, set3, set4, set5, set6, set7, set8, set9, set10, set11, set12, set13, set14, set15, set16, set17]

let j;

var slideIndexMandi = 0;
var slideIndexMaxi = 0;
var timer = null;
var isPlaying = false;
let i;
let slideShowStart = document.getElementById("startButton");
let slideShowPause = document.getElementById("pauseButton");

var mandi_0, maxi_0, mandi_1, maxi_1, mandi_2, maxi_2, mandi_3, maxi_3, mandi_4, maxi_4, mandi_5, maxi_5, mandi_6, maxi_6, mandi_7, maxi_7, mandi_8, maxi_8;
let mandi_9, maxi_9, mandi_10, maxi_10, mandi_11, maxi_11, mandi_12, maxi_12, mandi_13, maxi_13, mandi_14, maxi_14, mandi_15, maxi_15, mandi_16, maxi_16, mandi_17, maxi_17;

var mandiList = [mandi_0, mandi_1, mandi_2, mandi_3, mandi_4, mandi_5, mandi_6, mandi_7, mandi_8, mandi_9, mandi_10, mandi_11, mandi_12, mandi_13, mandi_14, mandi_15, mandi_16, mandi_17];

var maxiList = [maxi_0, maxi_1, maxi_2, maxi_3, maxi_4, maxi_5, maxi_6, maxi_7, maxi_8, maxi_9, maxi_10, maxi_11, maxi_12, maxi_13, maxi_14, maxi_15, maxi_16, maxi_17];

var buttons_mandi;
var buttons_maxi;

var mandiVisible = true;
var maxiVisible = true;

var showMandibular;
var showMaxillary;
var showBothButton;

let isMandiVisible = true;
let isMaxiVisible = true;
let isBothVisible = true;

let mandi_counter = 0;
let maxi_counter = 0;

// var buttonName = [];

var initial;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight, mainLight2 } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight, mainLight2);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { mandibular0, mandibular1, mandibular2, mandibular3, mandibular4, mandibular5, mandibular6, mandibular7,
    mandibular8, mandibular9, mandibular10, mandibular11, mandibular12, mandibular13, mandibular14, mandibular15,
    mandibular16, mandibular17,
    maxillar0, maxillar1, maxillar2, maxillar3, maxillar4, maxillar5, maxillar6, maxillar7,
    maxillar8, maxillar9, maxillar10, maxillar11, maxillar12, maxillar13, maxillar14, maxillar15,
    maxillar16, maxillar17,
    RESOURCES_LOADED } = await loadInit();

    // Adjust the controller target
    controls.target.set(0, -0.15, 0);
    // controls.target.copy(mandibular.position);

    mandiList[0] = mandibular0;
    maxiList[0] = maxillar0;

    mandiList[1] = mandibular1;
    maxiList[1] = maxillar1;

    mandiList[2] = mandibular2;
    maxiList[2] = maxillar2;
    
    mandiList[3] = mandibular3;
    maxiList[3] = maxillar3;
    
    mandiList[4] = mandibular4;
    maxiList[4] = maxillar4;

    mandiList[5] = mandibular5;
    maxiList[5] = maxillar5;
    
    mandiList[6] = mandibular6;
    maxiList[6] = maxillar6;
    
    mandiList[7] = mandibular7;
    maxiList[7] = maxillar7;
    
    mandiList[8] = mandibular8;
    maxiList[8] = maxillar8;

    mandiList[9] = mandibular9;
    maxiList[9] = maxillar9;

    mandiList[10] = mandibular10;
    maxiList[10] = maxillar10;

    mandiList[11] = mandibular11;
    maxiList[11] = maxillar11;

    mandiList[12] = mandibular12;
    maxiList[12] = maxillar12;

    mandiList[13] = mandibular13;
    maxiList[13] = maxillar13;

    mandiList[14] = mandibular14;
    maxiList[14] = maxillar14;

    mandiList[15] = mandibular15;
    maxiList[15] = maxillar15;

    mandiList[16] = mandibular16;
    maxiList[16] = maxillar16;

    mandiList[17] = mandibular17;
    maxiList[17] = maxillar17;

    scene.add(mandiList[0], maxiList[0]);

    // Loading screen until 3D model loaded
    if(!RESOURCES_LOADED){
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader-wrapper").style.visibility = "visible";
    }
    else{
      document.querySelector("#loader-wrapper").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }

    buttons_mandi = document.getElementsByClassName("button_mandi");
    buttons_maxi = document.getElementsByClassName("button_maxi");

    showMandibular = document.getElementById("showMandibular");
    showMaxillary = document.getElementById("showMaxillary");
    showBothButton = document.getElementById("showBoth")

    // let k;
    // for (k = 0; k < buttons_mandi.length; k++) {
    //   buttons_mandi[k].disabled = true;
    //   buttons_maxi[k].disabled = true; 
    // }

    this.show_master();
    this.slideControl();
    this.visibilityControl();
  }


  slideControl() {
    function startSlides() {
      let s;
      isPlaying = true;

      for (s = 0; s < buttons_mandi.length; s++) {
        buttons_mandi[s].disabled = false;
        buttons_maxi[s].disabled = false;
      }

      if (isMandiVisible == true || isBothVisible == true) {
        slideIndexMandi++;
        if (slideIndexMandi > buttons_mandi.length) {slideIndexMandi = 1}    
        buttons_mandi[slideIndexMandi-1].click();
        buttons_mandi[slideIndexMandi-1].disabled = true;
      }

      if (isMaxiVisible == true || isBothVisible == true) {
        slideIndexMaxi++;
        if (slideIndexMaxi > buttons_maxi.length) {slideIndexMaxi = 1}
        buttons_maxi[slideIndexMaxi-1].click();
        buttons_maxi[slideIndexMaxi-1].disabled = true;
      }

      timer = setTimeout(startSlides, 1000); // Change image every 2 seconds
      slideShowStart.disabled = true;
      slideShowPause.disabled = false;
    }
    slideShowStart.addEventListener('click', startSlides);

    function pauseSlides() {
      isPlaying = false;
      clearTimeout(timer);
      timer = null;
      slideShowStart.disabled = false;
      slideShowPause.disabled = true;
    }
    slideShowPause.addEventListener('click', pauseSlides);
  }


  visibilityControl() {
    function show_mandi() {
      let x;

      for (x = 0; x < buttons_maxi.length; x++) {
        buttons_mandi[x].style.display = "inline-block";
        buttons_maxi[x].style.display = "none";
      }

      for (x = 0; x < maxiList.length; x++) {
        scene.remove(maxiList[x]);
      }

      if (isMandiVisible == false) {
        for (x = 0; x < maxiList.length; x++) {
          scene.remove(mandiList[x]);
        }
        scene.add(mandiList[mandi_counter]);

      }

      showMandibular.disabled = true
      showMaxillary.disabled = false
      showBothButton.disabled = false

      isMandiVisible = true;
      isMaxiVisible = false;
      isBothVisible = false;
    }

    function show_maxi() {
      let x;

      for (x = 0; x < buttons_mandi.length; x++) {
        buttons_mandi[x].style.display = "none";
        buttons_maxi[x].style.display = "inline-block";
      }

      for (x = 0; x < maxiList.length; x++) {
        scene.remove(mandiList[x]);
      }

      if (isMaxiVisible == false) {
        for (x = 0; x < mandiList.length; x++) {
          scene.remove(maxiList[x]);
        }
        scene.add(maxiList[maxi_counter]);
      }

      showMandibular.disabled = false
      showMaxillary.disabled = true
      showBothButton.disabled = false

      isMandiVisible = false;
      isMaxiVisible = true;
      isBothVisible = false;
    }

    function show_both() {
      let x;

      for (x = 0; x < buttons_maxi.length; x++) {
        buttons_mandi[x].style.display = "inline-block";
        buttons_maxi[x].style.display = "inline-block";
      }

      for (x = 0; x < maxiList.length; x++) {
        // scene.remove(maxiList[x]);
      }

      if (isBothVisible == false) {
        scene.add(mandiList[mandi_counter]);
        scene.add(maxiList[maxi_counter]);
      }

      showMandibular.disabled = false
      showMaxillary.disabled = false
      showBothButton.disabled = true

      isMandiVisible = true;
      isMaxiVisible = true;
      isBothVisible = true;
    }
    showMandibular.addEventListener('click', show_mandi);
    showMaxillary.addEventListener('click', show_maxi);
    showBothButton.addEventListener('click', show_both);
  }


  async show_master() {

    function showMandi_0(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[0]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[0].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 1;
      }
      mandi_counter = 0;
      // console.log('switched to Mandibular 0');
    }

    buttons_mandi[0].addEventListener('click', showMandi_0);

    function showMandi_1(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[1]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[1].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 2;
      }
      mandi_counter = 1;
      // console.log('switched to Mandibular 1');
    }

    buttons_mandi[1].addEventListener('click', showMandi_1);

    function showMandi_2(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[2]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[2].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 3;
      }
      mandi_counter = 2;
      // console.log('switched to Mandibular 2');
    }

    buttons_mandi[2].addEventListener('click', showMandi_2);

    function showMandi_3(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[3]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[3].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 4;
      }
      mandi_counter = 3;
      // console.log('switched to Mandibular 3');
    }

    buttons_mandi[3].addEventListener('click', showMandi_3);

    function showMandi_4(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[4]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[4].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 5;
      }
      mandi_counter = 4;
      // console.log('switched to Mandibular 4');
    }
    buttons_mandi[4].addEventListener('click', showMandi_4);

    function showMandi_5(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[5]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[5].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 6;
      }
      mandi_counter = 5;
      // console.log('switched to Mandibular 5');

    }
    buttons_mandi[5].addEventListener('click', showMandi_5);

    function showMandi_6(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[6]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[6].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 7;
      }
      mandi_counter = 6;
      // console.log('switched to Mandibular 6');

    }
    buttons_mandi[6].addEventListener('click', showMandi_6);

    function showMandi_7(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[7]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[7].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 8;
      }
      mandi_counter = 7;
      // console.log('switched to Mandibular 7');

    }
    buttons_mandi[7].addEventListener('click', showMandi_7);

    function showMandi_8(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[8]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[8].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 9;
      }
      mandi_counter = 8;
      // console.log('switched to Mandibular 8');
    }
    buttons_mandi[8].addEventListener('click', showMandi_8);

    function showMandi_9(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[9]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[9].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 10;
      }
      mandi_counter = 9;
      // console.log('switched to Mandibular 9');
    }

    buttons_mandi[9].addEventListener('click', showMandi_9);

    function showMandi_10(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[10]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[10].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 11;
      }
      mandi_counter = 10;
      // console.log('switched to Mandibular 10');
    }

    buttons_mandi[10].addEventListener('click', showMandi_10);

    function showMandi_11(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[11]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[11].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 12;
      }
      mandi_counter = 11;
      // console.log('switched to Mandibular 11');
    }

    buttons_mandi[11].addEventListener('click', showMandi_11);

    function showMandi_12(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[12]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[12].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 13;
      }
      mandi_counter = 12;
      // console.log('switched to Mandibular 12');
    }

    buttons_mandi[12].addEventListener('click', showMandi_12);

    function showMandi_13(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[13]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[13].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 14;
      }
      mandi_counter = 13;
      // console.log('switched to Mandibular 13');
    }

    buttons_mandi[13].addEventListener('click', showMandi_13);

    function showMandi_14(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[14]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[14].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 15;
      }
      mandi_counter = 14;
      // console.log('switched to Mandibular 14');
    }

    buttons_mandi[14].addEventListener('click', showMandi_14);

    function showMandi_15(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[15]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[15].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 16;
      }
      mandi_counter = 15;
      // console.log('switched to Mandibular 15');
    }

    buttons_mandi[15].addEventListener('click', showMandi_15);

    function showMandi_16(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[16]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[16].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 17;
      }
      mandi_counter = 16;
      // console.log('switched to Mandibular 16');
    }

    buttons_mandi[16].addEventListener('click', showMandi_16);

    function showMandi_17(){
      let n;

      for (n = 0; n < mandiList.length; n++) {
        scene.remove(mandiList[n]);
      }

      scene.add(mandiList[17]);

      for (i = 0; i < buttons_mandi.length; i++) {
        buttons_mandi[i].disabled = false; 
      }
      buttons_mandi[17].disabled = true;

      if (isPlaying == false) {
        slideIndexMandi = 18;
      }
      mandi_counter = 17;
      // console.log('switched to Mandibular 17');
    }

    buttons_mandi[17].addEventListener('click', showMandi_17);

    function showMaxi_0(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[0]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[0].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 1;
      }
      maxi_counter = 0;
      // console.log('switched to Maxillary 0');
    }

    buttons_maxi[0].addEventListener('click', showMaxi_0);

    function showMaxi_1(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[1]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[1].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 2;
      }
      maxi_counter = 1;
      // console.log('switched to Maxillary 1');
    }

    buttons_maxi[1].addEventListener('click', showMaxi_1);

    function showMaxi_2(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[2]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[2].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 3;
      }
      maxi_counter = 2;
      // console.log('switched to Maxillary 2');
    }

    buttons_maxi[2].addEventListener('click', showMaxi_2);

    function showMaxi_3(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[3]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[3].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 4;
      }
      maxi_counter = 3;
      // console.log('switched to Maxillary 3');
    }

    buttons_maxi[3].addEventListener('click', showMaxi_3);

    function showMaxi_4(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[4]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[4].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 5;
      }
      maxi_counter = 4;
      // console.log('switched to Maxillary 4');
    }
    buttons_maxi[4].addEventListener('click', showMaxi_4);

    function showMaxi_5(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[5]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[5].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 6;
      }
      maxi_counter = 5;
      // console.log('switched to Maxillary 5');
    }
    buttons_maxi[5].addEventListener('click', showMaxi_5);

    function showMaxi_6(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[6]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[6].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 7;
      }
      maxi_counter = 6;
      // console.log('switched to Maxillary 6');
    }
    buttons_maxi[6].addEventListener('click', showMaxi_6);

    function showMaxi_7(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[7]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[7].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 8;
      }
      maxi_counter = 7;
      // console.log('switched to Maxillary 7');

    }
    buttons_maxi[7].addEventListener('click', showMaxi_7);

    function showMaxi_8(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[8]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[8].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 9;
      }
      maxi_counter = 8;
      // console.log('switched to Maxillary 8');
    }
    buttons_maxi[8].addEventListener('click', showMaxi_8);

    function showMaxi_9(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[9]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[9].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 10;
      }
      maxi_counter = 9;
      // console.log('switched to Maxillary 9');
    }

    buttons_maxi[9].addEventListener('click', showMaxi_9);

    function showMaxi_10(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[10]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[10].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 11;
      }
      maxi_counter = 10;
      // console.log('switched to Maxillary 10');
    }

    buttons_maxi[10].addEventListener('click', showMaxi_10);

    function showMaxi_11(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[11]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[11].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 12;
      }
      maxi_counter = 11;
      // console.log('switched to Maxillary 11');
    }

    buttons_maxi[11].addEventListener('click', showMaxi_11);

    function showMaxi_12(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[12]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[12].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 13;
      }
      maxi_counter = 12;
      // console.log('switched to Maxillary 12');
    }

    buttons_maxi[12].addEventListener('click', showMaxi_12);

    function showMaxi_13(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[13]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[13].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 14;
      }
      maxi_counter = 13;
      // console.log('switched to Maxillary 13');
    }

    buttons_maxi[13].addEventListener('click', showMaxi_13);

    function showMaxi_14(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[14]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }
      buttons_maxi[14].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 15;
      }
      maxi_counter = 14;
      // console.log('switched to Maxillary 14');
    }

    buttons_maxi[14].addEventListener('click', showMaxi_14);

    function showMaxi_15(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[15]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }

      buttons_maxi[15].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 16;
      }
      maxi_counter = 15;
      // console.log('switched to Maxillary 15');
    }

    buttons_maxi[15].addEventListener('click', showMaxi_15);

    function showMaxi_16(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[16]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }

      buttons_maxi[16].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 17;
      }
      maxi_counter = 16;
      // console.log('switched to Maxillary 16');
    }

    buttons_maxi[16].addEventListener('click', showMaxi_16);

    function showMaxi_17(){
      let n;

      for (n = 0; n < maxiList.length; n++) {
        scene.remove(maxiList[n]);
      }

      scene.add(maxiList[17]);

      for (i = 0; i < buttons_maxi.length; i++) {
        buttons_maxi[i].disabled = false; 
      }

      buttons_maxi[17].disabled = true;

      if (isPlaying == false) {
        slideIndexMaxi = 18;
      }
      maxi_counter = 17;
      // console.log('switched to Maxillary 17');
    }
    buttons_maxi[17].addEventListener('click', showMaxi_17);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
