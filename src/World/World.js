import { loadInit, loadNext1, loadNext2, loadNext3, loadNext4, loadNext5, loadNext6 } from './components/models/models.js';
import { loadNext7, loadNext8, loadNext9, loadNext10, loadNext11, loadNext12 } from './components/models/models.js';
import { loadNext13, loadNext14, loadNext15, loadNext16, loadNext17 } from './components/models/models.js';
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

let j;

var slideIndex = 0;
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
    const { mandibular, maxillary, RESOURCES_LOADED } = await loadInit();

    // move the target to the center of the model
    controls.target.copy(mandibular.position);

    mandiList[0] = mandibular;
    maxiList[0] = maxillary;

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

    let k;
    for (k = 0; k < buttons_mandi.length; k++) {
      buttons_mandi[k].disabled = true;
      buttons_maxi[k].disabled = true; 
    }

    this.addModel_1();
    this.add_();
    this.slideControl();
  }


  slideControl() {
    
  }


  async add_() {

    // function modelShow() {

    //   let m;

    //   var model =  [mandiList[0], maxiList[0]];

    //   for (m = 0; m < model.length; m++) {

    //     // console.log(model[m]);

    //     if(model[m].text == event.target.id){
    //       scene.add(model[m]);
    //     }
    //     else {
    //       scene.remove(model[m]);
    //     }
        
    //   }

    //   // scene.add(mandi[0]);

    //   // console.log(event.target.id);
    //   // console.log (mandiList[0])

    // }

    // let j;

    // for (j = 0; j < buttons.length; j++) {
    //   buttons[j].addEventListener('click', modelShow);
    // }


    function startSlides() {
      let s;
      isPlaying = true;

      for (s = 0; s < buttons_mandi.length; s++) {
        buttons_mandi[s].disabled = false;
        buttons_maxi[s].disabled = false;
      }
      slideIndex++;
      if (slideIndex > buttons_mandi.length) {slideIndex = 1}    
      buttons_mandi[slideIndex-1].click();
      buttons_mandi[slideIndex-1].disabled = true;

      if (slideIndex > buttons_maxi.length) {slideIndex = 1}
      buttons_maxi[slideIndex-1].click();
      buttons_maxi[slideIndex-1].disabled = true;
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

      console.log('switched to Mandibular 0');
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

      console.log('switched to Mandibular 1');
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

      console.log('switched to Mandibular 2');
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

      console.log('switched to Mandibular 3');
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

      console.log('switched to Mandibular 4');
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

      console.log('switched to Mandibular 5');

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

      console.log('switched to Mandibular 6');

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

      console.log('switched to Mandibular 7');

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

      console.log('switched to Mandibular 8');
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

      console.log('switched to Mandibular 9');
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

      console.log('switched to Mandibular 10');
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

      console.log('switched to Mandibular 11');
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

      console.log('switched to Mandibular 12');
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

      console.log('switched to Mandibular 13');
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

      console.log('switched to Mandibular 14');
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

      console.log('switched to Mandibular 15');
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

      console.log('switched to Mandibular 16');
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

      console.log('switched to Mandibular 17');
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

      console.log('switched to Maxillary 0');
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

      console.log('switched to Maxillary 1');
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

      console.log('switched to Maxillary 2');
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

      console.log('switched to Maxillary 3');
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

      console.log('switched to Maxillary 4');
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

      console.log('switched to Maxillary 5');
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

      console.log('switched to Maxillary 6');
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

      console.log('switched to Maxillary 7');

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

      console.log('switched to Maxillary 8');
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

      console.log('switched to Maxillary 9');
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

      console.log('switched to Maxillary 10');
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

      console.log('switched to Maxillary 11');
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

      console.log('switched to Maxillary 12');
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

      console.log('switched to Maxillary 13');
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

      console.log('switched to Maxillary 14');
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

      console.log('switched to Maxillary 15');
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

      console.log('switched to Maxillary 16');
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

      console.log('switched to Maxillary 17');
    }
    buttons_maxi[17].addEventListener('click', showMaxi_17);
  }


  //functions to load model asynchrously
  async addModel_1() {
    const { mandibular, maxillary } = await loadNext1();

    mandiList[1] = mandibular;
    maxiList[1] = maxillary;

    buttons_mandi[1].disabled = false;
    buttons_maxi[1].disabled = false;

    this.addModel_2();
  }

  async addModel_2() {
    const { mandibular, maxillary } = await loadNext2();

    mandiList[2] = mandibular;
    maxiList[2] = maxillary;
    buttons_mandi[2].disabled = false;
    buttons_maxi[2].disabled = false;

    this.addModel_3();
  }

  async addModel_3() {
    const { mandibular, maxillary } = await loadNext3();

    mandiList[3] = mandibular;
    maxiList[3] = maxillary;

    buttons_mandi[3].disabled = false;
    buttons_maxi[3].disabled = false;

    this.addModel_4();
  }

  async addModel_4() {
    const { mandibular, maxillary } = await loadNext4();

    mandiList[4] = mandibular;
    maxiList[4] = maxillary;

    buttons_mandi[4].disabled = false;
    buttons_maxi[4].disabled = false;

    this.addModel_5();
  }

  async addModel_5() {
    const { mandibular, maxillary } = await loadNext5();

    mandiList[5] = mandibular;
    maxiList[5] = maxillary;

    buttons_mandi[5].disabled = false;
    buttons_maxi[5].disabled = false;

    this.addModel_6();
  }

  async addModel_6() {
    const { mandibular, maxillary } = await loadNext6();

    mandiList[6] = mandibular;
    maxiList[6] = maxillary;

    buttons_mandi[6].disabled = false;
    buttons_maxi[6].disabled = false;

    this.addModel_7();
  }

  async addModel_7() {
    const { mandibular, maxillary } = await loadNext7();

    mandiList[7] = mandibular;
    maxiList[7] = maxillary;

    buttons_mandi[7].disabled = false;
    buttons_maxi[7].disabled = false;

    this.addModel_8();
  }

  async addModel_8() {
    const { mandibular, maxillary } = await loadNext8();

    mandiList[8] = mandibular;
    maxiList[8] = maxillary;

    buttons_mandi[8].disabled = false;
    buttons_maxi[8].disabled = false;

    this.addModel_9();
  }

  async addModel_9() {
    const { mandibular, maxillary } = await loadNext9();

    mandiList[9] = mandibular;
    maxiList[9] = maxillary;

    buttons_mandi[9].disabled = false;
    buttons_maxi[9].disabled = false;

    this.addModel_10();
  }

  async addModel_10() {
    const { mandibular, maxillary } = await loadNext10();

    mandiList[10] = mandibular;
    maxiList[10] = maxillary;

    buttons_mandi[10].disabled = false;
    buttons_maxi[10].disabled = false;

    this.addModel_11();
  }

  async addModel_11() {
    const { mandibular, maxillary } = await loadNext11();

    mandiList[11] = mandibular;
    maxiList[11] = maxillary;

    buttons_mandi[11].disabled = false;
    buttons_maxi[11].disabled = false;

    this.addModel_12();
  }

  async addModel_12() {
    const { mandibular, maxillary } = await loadNext12();

    mandiList[12] = mandibular;
    maxiList[12] = maxillary;

    buttons_mandi[12].disabled = false;
    buttons_maxi[12].disabled = false;

    this.addModel_13();
  }

  async addModel_13() {
    const { mandibular, maxillary } = await loadNext13();

    mandiList[13] = mandibular;
    maxiList[13] = maxillary;

    buttons_mandi[13].disabled = false;
    buttons_maxi[13].disabled = false;

    this.addModel_14();
  }

  async addModel_14() {
    const { mandibular, maxillary } = await loadNext14();

    mandiList[14] = mandibular;
    maxiList[14] = maxillary;

    buttons_mandi[14].disabled = false;
    buttons_maxi[14].disabled = false;

    this.addModel_15();
  }

  async addModel_15() {
    const { mandibular, maxillary } = await loadNext15();

    mandiList[15] = mandibular;
    maxiList[15] = maxillary;

    buttons_mandi[15].disabled = false;
    buttons_maxi[15].disabled = false;

    this.addModel_16();
  }

  async addModel_16() {
    const { mandibular, maxillary } = await loadNext16();

    mandiList[16] = mandibular;
    maxiList[16] = maxillary;

    buttons_mandi[16].disabled = false;
    buttons_maxi[16].disabled = false;

    this.addModel_17();
  }

  async addModel_17() {
    const { mandibular, maxillary } = await loadNext17();

    mandiList[17] = mandibular;
    maxiList[17] = maxillary;

    buttons_mandi[17].disabled = false;
    buttons_maxi[17].disabled = false;
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
