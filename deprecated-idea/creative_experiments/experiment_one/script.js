let colorChangeInterval = 1000 // 1 second
let startTime
let startColor, endColor
let currentColor

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  startTime = millis()
  startColor = [random(255), random(255), random(255)]
  endColor = [random(255), random(255), random(255)]
}

function draw() {
  orbitControl()
  //   lights()
  background(255)
  leftSide()
  rightSide(currentColor)
  colourPicker()
}

function leftSide() {
  let elapsedTime = millis() - startTime
  if (elapsedTime > colorChangeInterval) {
    startTime = millis()
    startColor = endColor
    endColor = [random(255), random(255), random(255)]
    elapsedTime = 0
  }

  let t = elapsedTime / colorChangeInterval
  currentColor = [
    lerp(startColor[0], endColor[0], t),
    lerp(startColor[1], endColor[1], t),
    lerp(startColor[2], endColor[2], t),
  ]

  fill(currentColor[0], currentColor[1], currentColor[2])
  push()
  translate(-windowWidth / 4, 0, 0)
  box(windowWidth / 2, windowHeight, 50)
  pop()
}

function colourPicker() {
  currentColor = get(windowWidth / 4, windowHeight / 2)
  console.log(
    `RGB: (${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`
  )
  return {
    r: currentColor[0],
    g: currentColor[1],
    b: currentColor[2],
  }
}

function rightSide(currentColor) {
  push()
  noStroke()
  ambientMaterial(0)
  translate(windowWidth / 4, -windowHeight / 3, 0)
  box(windowWidth / 2, windowHeight / 3, 50)
  translate(0, windowHeight / 3, 0)
  box(windowWidth / 2, windowHeight / 3, 50)
  translate(0, windowHeight / 3, 0)
  box(windowWidth / 2, windowHeight / 3, 50)
  pop()

  let r = color(currentColor[0], 0, 0)
  let g = color(0, currentColor[1], 0)
  let b = color(0, 0, currentColor[2])

  // Adjusted spotlight parameters
  pointLight(r, windowWidth / 4, -windowHeight / 3, 200) // Red point light for the top box
  pointLight(g, windowWidth / 4, 0, 200) // Green point light for the middle box
  pointLight(b, windowWidth / 4, windowHeight / 3, 200) // Blue point light for the bottom box

  // Debugging visuals for spotlights
  push()
  noFill()
  stroke(255, 0, 0)
  translate(windowWidth / 4, -windowHeight / 3, 200)
  sphere(10)
  pop()

  push()
  noFill()
  stroke(0, 255, 0)
  translate(windowWidth / 4, 0, 200)
  sphere(10)
  pop()

  push()
  noFill()
  stroke(0, 0, 255)
  translate(windowWidth / 4, windowHeight / 3, 200)
  sphere(10)
  pop()
}

// function rightSide(currentColor) {
//   fill(currentColor[0], 0, 0) // Use the red value from currentColor
//   rect(windowWidth / 2, 0, windowWidth / 2, windowHeight / 3)

//   fill(0, currentColor[1], 0) // Use the green value from currentColor
//   rect(windowWidth / 2, windowHeight / 3, windowWidth / 2, windowHeight / 3)

//   fill(0, 0, currentColor[2]) // Use the blue value from currentColor
//   rect(
//     windowWidth / 2,
//     (windowHeight / 3) * 2,
//     windowWidth / 2,
//     windowHeight / 3
//   )
// }
