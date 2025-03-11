class MergeSort extends Sortable {

    constructor(collection) {
        super(collection);
    }

    async sort() {
        await this.mergeSort(0, this.collection.length() - 1);
        await this.showItems();
    }

    async mergeSort(l, r) {
        if (l < r) {
            let m = Math.floor(l + (r - l) / 2);
            await this.mergeSort(l, m);
            await this.mergeSort(m + 1, r);
            await this.merge(l, m, r);
        }
    }

    async merge(l, m, r) {
        let n1 = m - l + 1;
        let n2 = r - m;
        let L = [n1];
        let R = [n2];
        for(let i = 0; i < n1; i++) {
            L[i] = this.collection.get(i + l);
        }
        for(let i = 0; i < n2; i++) {
            R[i] = this.collection.get(i + m + 1);
        }
        let i = 0, j = 0, k = l;
        await this.showItems(l, r);
        while(i < n1 && j < n2) {
            if(L[i] <= R[j]) {
                this.collection.set(k++, L[i++]);
            }
            else {
                this.collection.set(k++, R[j++]);
            }
            await this.showItems(l, r);
        }
        while(i < n1) {
            this.collection.set(k++, L[i++]);
            await this.showItems(l, r);
        }
        while(j < n2) {
            this.collection.set(k++, R[j++]);
            await this.showItems(l, r);
        }
        await this.showItems(l, r);
    }

}