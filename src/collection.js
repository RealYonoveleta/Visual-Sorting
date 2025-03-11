class Collection {

    constructor() {
        this.items = [];
        this.itemWidth = 0;
        this.itemColor = "red";
        this.selectedColor = "blue";
        this.comparingColor = "cyan";
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

    get(index) {
        return this.items[index];
    }

    set(index, value) {
        this.items[index] = value;
    }

    length() {
        return this.items.length;
    }

    swap(i, j) {
        let temp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = temp;
    }

    fillItems(n) {
        this.items = [];
        for(let i = 0; i < n; i++) {
            this.items[i] = Math.floor(Math.random() * n) + 1;
        }
        this.setItemWidth();
        this.showItems(0);
    }

    fillUnrepeated(n) {
        this.items = [];
        for(let i = 0; i < n; i++) {
            let rd;
            do {
                rd = Math.floor(Math.random() * n) + 1;
            } while(this.items.includes(rd));

            this.items[i] = rd;
        }

        this.setItemWidth();
        this.showItems(0);
    }    

    showItem(i, color) {
        rectMode(CORNERS);
        fill(color);
        let x = i * this.itemWidth;
        rect(x, canvas.height, x + this.itemWidth, canvas.height - this.calculateItemHeight(this.items[i]));
    }

    showItems(selected, comparing) {
        let bgColor = "silver";
        strokeWeight(1);
        stroke(bgColor);
        background(bgColor);
        let color = undefined;
        for(let i = 0; i < this.items.length; i++) {
            if(i == selected) {
                color = this.selectedColor;
            } else if(i == comparing) {
                color = this.comparingColor;
            }
            else {
                color = this.itemColor;
            }
            this.showItem(i, color); 
        }
    }

    setItemWidth() {
        this.itemWidth = canvas.width / this.items.length;
    }

    calculateItemHeight(value) {
        return (canvas.height / this.items.length) * value;
    }

    setItemColor(color) {
        this.itemColor = color;
    }

    setSelectedColor(color) {
        this.selectedColor = color;
    }

    setComparingColor(color) {
        this.comparingColor = color;
    }

    setColors(itemColor, selectedColor, comparingColor) {
        this.setItemColor(itemColor);
        this.setSelectedColor(selectedColor);
        this.setComparingColor(comparingColor);
    }

}