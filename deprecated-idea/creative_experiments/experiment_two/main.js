import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

// Initialize scene
const scene = new THREE.Scene()

// Initialize camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 10

// Initialize renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 20, 100)
controls.update()

// Create a red light tube
const tubeGeometry = new THREE.CylinderGeometry(0.1, 0.1, 5, 32)
const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const tube = new THREE.Mesh(tubeGeometry, tubeMaterial)
tube.position.set(0, 0, 0)
scene.add(tube)

// Create a red point light
const pointLight = new THREE.PointLight(0xff0000, 1, 100)
pointLight.position.set(0, 0, 0)
scene.add(pointLight)

// Animation loop
function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

animate()
