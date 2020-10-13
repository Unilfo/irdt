import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export default function Loader(scene) {
  const loader = new GLTFLoader()

  loader.load(
    // resource URL
    './scene.gltf',
    // called when the resource is loaded
    function ( gltf ) {

      scene.add( gltf.scene );

    },
    // called while loading is progressing
    function ( xhr ) {

      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

      console.log( 'An error happened!!!' );

    }
  );
}
