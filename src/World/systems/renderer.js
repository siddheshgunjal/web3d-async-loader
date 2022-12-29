import { WebGLRenderer } from 'https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
