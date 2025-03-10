class Sortable {

    constructor() {
        this.items = [];
        this.itemWidth = 0;
        this.interval = 1000;
    }

    add(item) {
        this.items.push(item);
        this.setItemWidth();
    }

    remove(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        this.setItemWidth();
    }

    // should be overrided by subclasses implenting a sorting algorithm
    async sort() {
        return this.items.sort();
    }

    fillItems(n) {
        this.items = [];
        for(let i = 0; i < n; i++) {
            this.items[i] = Math.floor(Math.random() * n);
        }
        this.setItemWidth();
        this.showItems(0);
    }

    showItem(i, color) {
        rectMode(CORNERS);
        fill(color);
        let x = i * this.itemWidth;
        rect(x, windowHeight, x + this.itemWidth, windowHeight - this.calculateItemHeight(this.items[i]));
    }

    showItems(selected) {
        background(220);
        let color = undefined;
        for(let i = 0; i < this.items.length; i++) {
            if(i == selected) {
                color = "blue";
            } else if(i == selected + 1) {
                color = "cyan";
            }
            else {
                color = "red";
            }
            this.showItem(i, color); 
        }
    }

    setItemWidth() {
        this.itemWidth = windowWidth / this.items.length;
    }

    calculateItemHeight(value) {
        return (windowHeight / this.items.length) * value;
    }

}