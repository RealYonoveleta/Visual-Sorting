class InsertionSort extends Sortable {

    constructor(collection) {
        super(collection);
    }

    async sort() {
        for(let i = 1; i < this.collection.length(); i++) {
            let j = i;
            await this.showItems(j, j-1);
            while(j > 0 && this.collection.get(j) < this.collection.get(j - 1)) {
                this.collection.swap(j, j-1);
                await this.showItems(j, j-1);
                j--;
            }
        }

        await this.showItems();
    }

}