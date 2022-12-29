import { PerspectiveCamera } from 'https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js';

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.01, 100);

  camera.position.set(0, 1.5, 4);

  return camera;
}

export { createCamera };
