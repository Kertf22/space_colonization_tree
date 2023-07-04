class Leaf {
  position = {};

  constructor() {
    this.position = {
      x: random(),
      y: random(),
    };
  }

  show() {
    fill(this.position.x, this.position.y, 4, 4, '#ffffff')
  }
}
