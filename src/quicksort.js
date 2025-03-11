class QuickSort extends Sortable {

    constructor(collection) {
        super(collection); 
    }

    async sort() {
        await this.quicksort(0, this.collection.length() - 1);
        await this.showItems();
    }

    async quicksort(low, high) {
        if(low >= high) return;
        await this.showItems(low, high);
        let pivotPosition = await this.partition(low, high);
        await this.quicksort(low, pivotPosition - 1);
        await this.quicksort(pivotPosition + 1, high);
    }

    async partition(low, high) {
        let pivot = this.collection.get(high);
        let left = low, right = high - 1;
        await this.showItems(left, right);
        while(left <= right) {
            while(this.collection.get(left) < pivot) {
                    left++;
                    await this.showItems(left, right);
            }
            while(this.collection.get(right) > pivot) {
                    right--; 
                    await this.showItems(left, right);
            }
            if(left >= right) {
                    break;
            }
            this.collection.swap(left, right);
            await this.showItems(left, right);
        }
        this.collection.swap(left, high);
        await this.showItems(left, right);
        return left;
    }

}