class BubbleSort extends Sortable {

    constructor(collection) {
        super(collection);
    }

    async sort() {
 
        for (var i = 0; i < this.collection.length(); i++) {
            for (var j = 0; j < this.collection.length() - i - 1; j++) {

                await this.wait();

                this.collection.showItems(j, j + 1);

                if(this.collection.get(j) > this.collection.get(j + 1)) {
                    this.collection.swap(j, j + 1); 
                }
            }
        }
    }

}