const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");


const fill = (x, y, w, h,color) => {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w,h);
}

const line = (x1, y1, x2, y2,color) => {
    ctx.strokeStyle = color
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

const createCanvas = (width,height) => {
    canvas.width = width
    canvas.height = height

    ctx.fillStyle = '#383636'
    ctx.fillRect(0, 0, width, height);
}

const clean = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.fillStyle = '#383636'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const cal_dist = (pos1, pos2) => {
    return Math.sqrt((pos1.x - pos2.x) ** 2 + (pos1.y - pos2.y) ** 2);
}

const add = (pos1, pos2) => {
    return {
        x: pos1.x + pos2.x,
        y: pos1.y + pos2.y
    }
}

const sub = (pos1, pos2) => {
    return {
        x: pos1.x - pos2.x,
        y: pos1.y - pos2.y
    }
}

const multi = (pos, n) => {
    return {
        x: pos.x * n,
        y: pos.y * n
    }
}

const normalize = (pos) => {
    let mag = Math.sqrt(pos.x ** 2 + pos.y ** 2);
    return {
        x: pos.x / mag,
        y: pos.y / mag
    }
}

const div = (pos, n) => {
    return {
        x: pos.x / n,
        y: pos.y / n
    }
}