import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';
import { LoadingManager } from 'https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js';


var loadingManager = null;
var RESOURCES_LOADED = false;

const posx = 0;
const posy = 0.22;
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

  let loading_bar = document.getElementById("greenBar")

  // Create a loading manager to set RESOURCES_LOADED when appropriate.
  // Pass loadingManager to all resource loaders.
  loadingManager = new LoadingManager();
    
  loadingManager.onProgress = function(item, loaded, total){
    // console.log(item, loaded, total);
    // console.log('Loaded:', Math.round(loaded / total * 100, 2) + '%')
    loading_bar.style.width = (Math.round(loaded / total * 100, 2) + '%')
    loading_bar.innerHTML = (Math.round(loaded / total * 100, 2) + '%')
  };
  
  loadingManager.onLoad = function(){
    console.log("loaded initial resources");
    RESOURCES_LOADED = true;
  };

  const loader = new GLTFLoader(loadingManager);

  const [model_L0, model_U0, model_L1, model_U1, model_L2, model_U2,
        model_L3, model_U3, model_L4, model_U4, model_L5, model_U5,
        model_L6, model_U6, model_L7, model_U7, model_L8, model_U8,
        model_L9, model_U9, model_L10, model_U10, model_L11, model_U11,
        model_L12, model_U12, model_L13, model_U13, model_L14, model_U14,
        model_L15, model_U15, model_L16, model_U16, model_L17, model_U17] = await Promise.all([
    loader.loadAsync(modelArray[0]), loader.loadAsync(modelArray[1]),
    loader.loadAsync(modelArray[2]), loader.loadAsync(modelArray[3]),
    loader.loadAsync(modelArray[4]), loader.loadAsync(modelArray[5]),
    loader.loadAsync(modelArray[6]), loader.loadAsync(modelArray[7]),
    loader.loadAsync(modelArray[8]), loader.loadAsync(modelArray[9]),
    loader.loadAsync(modelArray[10]), loader.loadAsync(modelArray[11]),
    loader.loadAsync(modelArray[12]), loader.loadAsync(modelArray[13]),
    loader.loadAsync(modelArray[14]), loader.loadAsync(modelArray[15]),
    loader.loadAsync(modelArray[16]), loader.loadAsync(modelArray[17]),
    loader.loadAsync(modelArray[18]), loader.loadAsync(modelArray[19]),
    loader.loadAsync(modelArray[20]), loader.loadAsync(modelArray[21]),
    loader.loadAsync(modelArray[22]), loader.loadAsync(modelArray[23]),
    loader.loadAsync(modelArray[24]), loader.loadAsync(modelArray[25]),
    loader.loadAsync(modelArray[26]), loader.loadAsync(modelArray[27]),
    loader.loadAsync(modelArray[28]), loader.loadAsync(modelArray[29]),
    loader.loadAsync(modelArray[30]), loader.loadAsync(modelArray[31]),
    loader.loadAsync(modelArray[32]), loader.loadAsync(modelArray[33]),
    loader.loadAsync(modelArray[34]), loader.loadAsync(modelArray[35]),
  ]);

  // console.log('Done!', model_L);

  const mandibular0 = setupModel(model_L0);
  const maxillar0 = setupModel(model_U0);

  const mandibular1 = setupModel(model_L1);
  const maxillar1 = setupModel(model_U1);

  const mandibular2 = setupModel(model_L2);
  const maxillar2 = setupModel(model_U2);

  const mandibular3 = setupModel(model_L3);
  const maxillar3 = setupModel(model_U3);

  const mandibular4 = setupModel(model_L4);
  const maxillar4 = setupModel(model_U4);

  const mandibular5 = setupModel(model_L5);
  const maxillar5 = setupModel(model_U5);

  const mandibular6 = setupModel(model_L6);
  const maxillar6 = setupModel(model_U6);

  const mandibular7 = setupModel(model_L7);
  const maxillar7 = setupModel(model_U7);

  const mandibular8 = setupModel(model_L8);
  const maxillar8 = setupModel(model_U8);

  const mandibular9 = setupModel(model_L9);
  const maxillar9 = setupModel(model_U9);

  const mandibular10 = setupModel(model_L10);
  const maxillar10 = setupModel(model_U10);

  const mandibular11 = setupModel(model_L11);
  const maxillar11 = setupModel(model_U11);

  const mandibular12 = setupModel(model_L12);
  const maxillar12 = setupModel(model_U12);

  const mandibular13 = setupModel(model_L13);
  const maxillar13 = setupModel(model_U13);

  const mandibular14 = setupModel(model_L14);
  const maxillar14 = setupModel(model_U14);

  const mandibular15 = setupModel(model_L15);
  const maxillar15 = setupModel(model_U15);

  const mandibular16 = setupModel(model_L16);
  const maxillar16 = setupModel(model_U16);

  const mandibular17 = setupModel(model_L17);
  const maxillar17 = setupModel(model_U17);

  let mandiArray = [mandibular0, mandibular1, mandibular2, mandibular3, mandibular4, mandibular5, mandibular6, mandibular7,
    mandibular8, mandibular9, mandibular10, mandibular11, mandibular12, mandibular13, mandibular14, mandibular15,
    mandibular16, mandibular17]
  let maxiArray = [maxillar0, maxillar1, maxillar2, maxillar3, maxillar4, maxillar5, maxillar6, maxillar7,
    maxillar8, maxillar9, maxillar10, maxillar11, maxillar12, maxillar13, maxillar14, maxillar15,
    maxillar16, maxillar17]

  let i;

  for (i = 0; i < mandiArray.length; i++) {
      mandiArray[i].position.set(posx, -posy, posz);
      // mandiArray[i].rotation.set(  -Math.PI/2, 0, 0 );
      mandiArray[i].scale.set(scale, scale, scale);
      // mandiArray[i].castShadow = true;
      mandiArray[i].receiveShadow = false;

      maxiArray[i].position.set(posx, posy, posz);
      maxiArray[i].rotation.set( Math.PI/2, 0, 0 );
      maxiArray[i].scale.set(scale, scale, scale);
      // maxiArray[i].castShadow = true;
      maxiArray[i].receiveShadow = false;
    }

  return {
    mandibular0, mandibular1, mandibular2, mandibular3, mandibular4, mandibular5, mandibular6, mandibular7,
    mandibular8, mandibular9, mandibular10, mandibular11, mandibular12, mandibular13, mandibular14, mandibular15,
    mandibular16, mandibular17,
    maxillar0, maxillar1, maxillar2, maxillar3, maxillar4, maxillar5, maxillar6, maxillar7,
    maxillar8, maxillar9, maxillar10, maxillar11, maxillar12, maxillar13, maxillar14, maxillar15,
    maxillar16, maxillar17,
    RESOURCES_LOADED
  };
}

export {loadInit};
