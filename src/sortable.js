class Sortable {

    constructor(collection, delay = 10) {
        this.collection = collection;
        this.delay = delay;
    }

    // should be overrided by subclasses implenting a sorting algorithm
    async sort() {
        return this.items.sort();
    }

    async wait() {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, this.delay)
        );
    }

    setDelay(delay) {
        this.delay = delay;
    }

    async showItems(selected, comparing) {
        this.collection.showItems(selected, comparing);
        await this.wait();
    }

}