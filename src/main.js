let collection = new Collection();
let algorithm;
let collectionSize, delay;

const DEFAULT_COLLECTION_SIZE = 100;
const DEFAULT_DELAY = 10;

window.addEventListener('load', () => {
    collectionSize = document.getElementById("collectionsize");
    delay = document.getElementById("delay");
});

collection.setColors("#362c2c", "#ff0000", "#a70000");

function init(algorithmClass) {
    collection.fillUnrepeated(collectionSize.value || DEFAULT_COLLECTION_SIZE);
    algorithm = new algorithmClass(collection);
    algorithm.setDelay(delay.value || DEFAULT_DELAY);
    algorithm.sort();
}

function invokeBubbleSort() {
    init(BubbleSort);
}

function invokeSelectionSort() {
    init(SelectionSort);
}

function invokeInsertionSort() {
    init(InsertionSort);
}

function invokeQuickSort() {
    init(QuickSort);
}

function invokeMergeSort() {
    init(MergeSort);
}