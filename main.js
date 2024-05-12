import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from "gsap"
import * as dat from 'lil-gui'




// Scene
const scene = new THREE.Scene()


const image = new Image()
const texture = new THREE.Texture(image)
image.addEventListener('load', () =>
{
    texture.needsUpdate = true
})
image.src = 'holo.jpeg'

// Object
const geometry = new THREE.TorusGeometry( 2, 1, 20, 100 ); 
const material = new THREE.MeshBasicMaterial({ map: texture})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
import imageSource from '/Users/kajanthan/Desktop/Untitled/public/holo.jpeg'

console.log(imageSource)

/**
 * Debug
 */
 const gui = new dat.GUI()
 gui.add(mesh.position, 'y', - 3, 3, 0.01)
 gui.add(mesh.position, 'x', - 3, 3, 0.01)
 gui.add(mesh.position, 'z', - 3, 3, 0.01)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
    
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
camera.position.z = 15
scene.add(camera)
console.log(mesh.position.length())


 
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);


console.log(mesh.position.length())
/**
 * Animate
 */
 const tick = () =>
 {
     // Update objects
     mesh.rotation.y += 0.05
     
 
     // Render
     renderer.render(scene, camera)
 
     // Call tick again on the next frame
     window.requestAnimationFrame(tick)
 }
 
 tick()
 
 const controls = new OrbitControls( camera, renderer.domElement );

 
 camera.position.set( 10, 0, 5 );
 controls.update();
 
 function animate() {
 
     requestAnimationFrame( animate );
 
     // required if controls.enableDamping or controls.autoRotate are set to true
     controls.update();
 
     renderer.render( scene, camera );
 
 }

