let tree;
const max_dist = 200;
const min_dist = 10;



function setup() {
    createCanvas(600, 600);

    tree = new Tree();
}

setup();

function render() {
    tree.show();
    tree.grow();
}

var loop = function () {
    clean()
    render();
    window.requestAnimationFrame(loop);
};
window.requestAnimationFrame(loop);