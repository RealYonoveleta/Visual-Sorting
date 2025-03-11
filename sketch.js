let sketchContainer = document.getElementById("sketch-container");
let canvas;

function setup() {
  canvas = createCanvas(sketchContainer.offsetWidth, sketchContainer.offsetHeight);
  canvas.parent(sketchContainer);

  // Ensure the canvas size matches the container size
  if(canvas.width !== sketchContainer.offsetWidth || canvas.height !== sketchContainer.offsetHeight) {
    resizeCanvas(sketchContainer.offsetWidth, sketchContainer.offsetHeight);
  }
}

function draw() {

}

// Add an event listener to handle window resize events
window.addEventListener('resize', () => {
  resizeCanvas(sketchContainer.offsetWidth, sketchContainer.offsetHeight);
});
