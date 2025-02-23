import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.172.0/build/three.module.js"
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.172.0/examples/jsm/controls/OrbitControls.js"

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

// Initialize controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = true

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
