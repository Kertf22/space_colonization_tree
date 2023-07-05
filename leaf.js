class Leaf {
  position;
  reached = false;
  constructor() {
    this.position = {
      x: Math.random() * 600,
      y: Math.random() * 600 - 100,
    };
  }

  show() {
    fill(this.position.x, this.position.y, 4, 4, '#ffffff')
  }
}
