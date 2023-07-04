const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

const random = () => {
    return Math.random() * 600
}

const fill = (x, y, w, h,color) => {
    ctx.fillStyle = "white"
    ctx.fillRect(x, y, w,h);
}

const createCanvas = (width,height) => {
    canvas.width = width
    canvas.height = height

    ctx.fillStyle = '#dddddd'
    ctx.fillRect(0, 0, width, height);
}