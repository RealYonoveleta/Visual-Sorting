class SelectionSort extends Sortable {  

    constructor(collection) {
        super(collection);
    }

    async sort() {
        for(let i = 0; i < this.collection.length(); i++) {
            let minIndex = i;
            let j; 
            for(j = i + 1; j < this.collection.length(); j++) {
                await this.wait();
                this.collection.showItems(j, minIndex);
                if(this.collection.get(j) < this.collection.get(minIndex)) {
                    minIndex = j;
                }
            }

            this.collection.swap(i, minIndex);
            this.collection.showItems(j, minIndex);   
        }

    } 
}