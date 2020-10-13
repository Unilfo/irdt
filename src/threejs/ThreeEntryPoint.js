import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Loader from './Loader'

export default function ThreeEntryPoint(sceneRef, width, height) {


  // const width = getComputedStyle(sceneRef).width.slice(0, -2)
  // const height = getComputedStyle(sceneRef).height.slice(0, -2)


  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#fff');

  // Define a camera, set it to fill the browser window and position it
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.z = 5;

  // Define a renderer, and set it to fill the browser window
  const renderer = new THREE.WebGLRenderer(sceneRef);
  renderer.setSize(+width, +height);

  // Get an element from the DOM and append renderer.domElement to it
  sceneRef.appendChild(renderer.domElement);

  // Add controls, targetting the same DOM element
  let controls = new OrbitControls(camera, sceneRef);
  controls.target.set(0, 0, 0);
  controls.rotateSpeed = 0.5;
  controls.update();

  // Define (or import) your object's geometry

  // Define your object's material
  Loader(scene)

  // Create an animate function, which will allow you to render your scene and define any movements
  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  // Call the animate function
  animate();
}
