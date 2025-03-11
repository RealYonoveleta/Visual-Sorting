let collection = new Collection();
let bubble, selection, insertion, quicksort, mergesort;

function setup() {
  createCanvas(windowWidth, windowHeight);

  collection.fillUnrepeated(200);
  collection.setColors("#362c2c", "#ff0000", "#a70000");

  // bubble
  bubble = new BubbleSort(collection);
  bubble.setDelay(10);

  // selection
  selection = new SelectionSort(collection);
  selection.setDelay(10);

  // insertion
  insertion = new InsertionSort(collection);
  insertion.setDelay(10);

  // quicksort
  quicksort = new QuickSort(collection);
  quicksort.setDelay(10);

  // mergesort  
  mergesort = new MergeSort(collection);
  mergesort.setDelay(10);

  mergesort.sort();
}

function draw() {
  
}
