
class Tree {
    leaves = [];

    constructor() {
        for(let i=0;i<100;i++) {
            this.leaves.push(new Leaf())
        }
    }


    show() {
        for(let i= 0; i < this.leaves.length; i++) {
             this.leaves[i].show()
        }
    }
}