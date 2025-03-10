class BubbleSort extends Sortable {

    constructor() {
        super();
    }

    async sort(delay = 10) {
 
        for (var i = 0; i < this.items.length; i++) {
            for (var j = 0; j < this.items.length - i - 1; j++) {

                // wait
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, delay)
                );

                this.showItems(j);

                if(this.items[j] > this.items[j + 1]) {
                    let temp = this.items[j];
                    this.items[j] = this.items[j + 1];
                    this.items[j + 1] = temp;
                }
            }
        }
    }

}