let collection = new Collection();
let selection;

function setup() {
  createCanvas(windowWidth, windowHeight);

  collection.fillUnrepeated(200);
  collection.setColors("#362c2c", "#ff0000", "#a70000");
  selection = new SelectionSort(collection);
  selection.setDelay(50);

  selection.sort();
}

function draw() {
  
}
