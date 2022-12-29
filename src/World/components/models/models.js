import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';
import { LoadingManager } from 'https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js';


var loadingManager = null;
var RESOURCES_LOADED = false;

const posx = 0;
const posy = 0.35;
const posz = 0;
const scale = 0.012;

//3D model variables
let model0L = "./assets/Version_1_Malocclusion/Mandibular.glb";
let model0U = "./assets/Version_1_Malocclusion/Maxillary.glb";

let model1L = "./assets/Version_1_Subsetup1/Mandibular.glb";
let model1U = "./assets/Version_1_Subsetup1/Maxillary.glb";

let model2L = "./assets/Version_1_Subsetup2/Mandibular.glb";
let model2U = "./assets/Version_1_Subsetup2/Maxillary.glb";

let model3L = "./assets/Version_1_Subsetup3/Mandibular.glb";
let model3U = "./assets/Version_1_Subsetup3/Maxillary.glb";

let model4L = "./assets/Version_1_Subsetup4/Mandibular.glb";
let model4U = "./assets/Version_1_Subsetup4/Maxillary.glb";

let model5L = "./assets/Version_1_Subsetup5/Mandibular.glb";
let model5U = "./assets/Version_1_Subsetup5/Maxillary.glb";

let model6L = "./assets/Version_1_Subsetup6/Mandibular.glb";
let model6U = "./assets/Version_1_Subsetup6/Maxillary.glb";

let model7L = "./assets/Version_1_Subsetup7/Mandibular.glb";
let model7U = "./assets/Version_1_Subsetup7/Maxillary.glb";

let model8L = "./assets/Version_1_Subsetup8/Mandibular.glb";
let model8U = "./assets/Version_1_Subsetup8/Maxillary.glb";

let model9L = "./assets/Version_1_Subsetup9/Mandibular.glb";
let model9U = "./assets/Version_1_Subsetup9/Maxillary.glb";

let model10L = "./assets/Version_1_Subsetup10/Mandibular.glb";
let model10U = "./assets/Version_1_Subsetup10/Maxillary.glb";

let model11L = "./assets/Version_1_Subsetup11/Mandibular.glb";
let model11U = "./assets/Version_1_Subsetup11/Maxillary.glb";

let model12L = "./assets/Version_1_Subsetup12/Mandibular.glb";
let model12U = "./assets/Version_1_Subsetup12/Maxillary.glb";

let model13L = "./assets/Version_1_Subsetup13/Mandibular.glb";
let model13U = "./assets/Version_1_Subsetup13/Maxillary.glb";

let model14L = "./assets/Version_1_Subsetup14/Mandibular.glb";
let model14U = "./assets/Version_1_Subsetup14/Maxillary.glb";

let model15L = "./assets/Version_1_Subsetup15/Mandibular.glb";
let model15U = "./assets/Version_1_Subsetup15/Maxillary.glb";

let model16L = "./assets/Version_1_Subsetup16/Mandibular.glb";
let model16U = "./assets/Version_1_Subsetup16/Maxillary.glb";

let model17L = "./assets/Version_1_Subsetup17/Mandibular.glb";
let model17U = "./assets/Version_1_Subsetup17/Maxillary.glb";

let model18L = "./assets/Version_1_Subsetup18/Mandibular.glb";
let model18U = "./assets/Version_1_Subsetup18/Maxillary.glb";

var modelArray = [model0L, model0U, model1L, model1U, model2L, model2U, model3L, model3U, model4L, model4U, model5L, model5U, model6L, model6U, model7L, model7U, model8L, model8U, model9L, model9U, model10L, model10U, model11L, model11U, model12L, model12U, model13L, model13U, model14L, model14U, model15L, model15U, model16L, model16U, model17L, model17U]

async function loadInit() {

  // console.log(modelArray.length);

  // Create a loading manager to set RESOURCES_LOADED when appropriate.
  // Pass loadingManager to all resource loaders.
  loadingManager = new LoadingManager();
    
  loadingManager.onProgress = function(item, loaded, total){
    console.log(item, loaded, total);
  };
  
  loadingManager.onLoad = function(){
    console.log("loaded initial resources");
    RESOURCES_LOADED = true;
  };

  const loader = new GLTFLoader(loadingManager);

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[0]),
    loader.loadAsync(modelArray[1]),
  ]);

  // console.log('Done!', model_L);

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  // mandibular.castShadow = true;
  mandibular.receiveShadow = false;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  // maxillary.castShadow = true;
  maxillary.receiveShadow = false;

  return {
    mandibular,
    maxillary,
    RESOURCES_LOADED
  };
}

async function loadNext1() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[2]),
    loader.loadAsync(modelArray[3]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 1');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext2() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[4]),
    loader.loadAsync(modelArray[5]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 2');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext3() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[6]),
    loader.loadAsync(modelArray[7]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 3');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext4() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[8]),
    loader.loadAsync(modelArray[9]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 4');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext5() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[10]),
    loader.loadAsync(modelArray[11]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 5');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext6() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[12]),
    loader.loadAsync(modelArray[13]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 6');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext7() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[14]),
    loader.loadAsync(modelArray[15]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 7');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext8() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[16]),
    loader.loadAsync(modelArray[17]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 8');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext9() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[18]),
    loader.loadAsync(modelArray[19]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 9');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext10() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[20]),
    loader.loadAsync(modelArray[21]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 10');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext11() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[22]),
    loader.loadAsync(modelArray[23]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 11');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext12() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[24]),
    loader.loadAsync(modelArray[25]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 12');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext13() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[26]),
    loader.loadAsync(modelArray[27]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 13');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext14() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[28]),
    loader.loadAsync(modelArray[29]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 14');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext15() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[30]),
    loader.loadAsync(modelArray[31]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 15');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext16() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[32]),
    loader.loadAsync(modelArray[33]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 16');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

async function loadNext17() {

  const loader = new GLTFLoader();

  const [model_L, model_U] = await Promise.all([
    loader.loadAsync(modelArray[34]),
    loader.loadAsync(modelArray[35]),
  ]);

  // console.log('Loaded set 1!', model_L, model_U);
  console.log('Loaded set 17');

  const mandibular = setupModel(model_L);
  mandibular.position.set(posx, -posy, posz);
  // mandibular.rotation.set(  -Math.PI/2, 0, 0 );
  mandibular.scale.set(scale, scale, scale);
  mandibular.castShadow = true;
  mandibular.receiveShadow = true;

  const maxillary = setupModel(model_U);
  maxillary.position.set(posx, posy, posz);
  maxillary.rotation.set( Math.PI/2, 0, 0 );
  maxillary.scale.set(scale, scale, scale);
  maxillary.castShadow = true;
  maxillary.receiveShadow = true;

  return {
    mandibular,
    maxillary
  };
}

// async function loadRemaining() {
//   const loader = new GLTFLoader();

//   const [model1, model1_, model2, model2_, model3, model3_] = await Promise.all([
//     loader.loadAsync('./assets/Version_1_Subsetup1/Mandibular.glb'),
//     loader.loadAsync('./assets/Version_1_Subsetup1/Maxillary.glb'),
//     loader.loadAsync('./assets/Version_1_Subsetup2/Mandibular.glb'),
//     loader.loadAsync('./assets/Version_1_Subsetup2/Maxillary.glb'),
//     loader.loadAsync('./assets/Version_1_Subsetup3/Mandibular.glb'),
//     loader.loadAsync('./assets/Version_1_Subsetup3/Maxillary.glb'),
//   ]);

//   console.log('Squaaawk!', model1, model1_, model2, model2_, model3, model3_);

//   //set1
//   const mandibular1 = setupModel(model1);
//   mandibular1.position.set(posx, -posy, posz);
//   // mandibular1.rotation.set(  -Mmodel1ath.PI/2, 0, 0 );
//   mandibular1.scale.set(scale, scale, scale);
//   mandibular1.castShadow = true;
//   mandibular1.receiveShadow = true;

//   const maxillary1 = setupModel(model1_);
//   maxillary1.position.set(posx, posy, posz);
//   maxillary1.rotation.set( Math.PI, 0, 0 );
//   maxillary1.scale.set(scale, scale, scale);
//   maxillary1.castShadow = true;
//   maxillary1.receiveShadow = true;

//   //set2
//   const mandibular2 = setupModel(model2);
//   mandibular2.position.set(posx, -posy, posz);
//   // mandibular2.rotation.set(  -Mmodel1ath.PI/2, 0, 0 );
//   mandibular2.scale.set(scale, scale, scale);
//   mandibular2.castShadow = true;
//   mandibular2.receiveShadow = true;

//   const maxillary2 = setupModel(model2_);
//   maxillary2.position.set(posx, posy, posz);
//   maxillary2.rotation.set( Math.PI, 0, 0 );
//   maxillary2.scale.set(scale, scale, scale);
//   maxillary2.castShadow = true;
//   maxillary2.receiveShadow = true;

//   //set3
//   const mandibular3 = setupModel(model3);
//   mandibular3.position.set(posx, -posy, posz);
//   // mandibular3.rotation.set(  -Mmodel1ath.PI/2, 0, 0 );
//   mandibular3.scale.set(scale, scale, scale);
//   mandibular3.castShadow = true;
//   mandibular3.receiveShadow = true;

//   const maxillary3 = setupModel(model3_);
//   maxillary3.position.set(posx, posy, posz);
//   maxillary3.rotation.set( Math.PI, 0, 0 );
//   maxillary3.scale.set(scale, scale, scale);
//   maxillary3.castShadow = true;
//   maxillary3.receiveShadow = true;

//   return {
//     mandibular1,
//     maxillary1,
//     mandibular2,
//     maxillary2,
//     mandibular3,
//     maxillary3
//   };
// }

// async function loadRemaining() {
//   const loader1 = new MTLLoader();
//   const loader2 = new OBJLoader();

//   const [storkData] = await Promise.all([
//     loader1.loadAsync('./assets/models/Mandibular.mtl', function(materials){
//       materials.preload();
//       loader2.setMaterial(materials).loadAsync('.assets/models/Mandibular.obj')}),
//   ]);

//   console.log('stork!', storkData);

//   // const stork = setupModel(storkData);
//   const stork = storkData;
//   // stork.position.set(0, -2.5, -10);

//   return {
//     stork,
//   };
// }

export { loadInit, loadNext1, loadNext2, loadNext3, loadNext4, loadNext5, loadNext6, loadNext7, loadNext8, loadNext9, loadNext10, loadNext11, loadNext12, loadNext13, loadNext14, loadNext15, loadNext16, loadNext17 };
