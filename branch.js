
class Branch {
    pos;
    parent;
    original_direction;
    initial_pos;
    direction;
    count = 0;
    length = 5;
    constructor(parent, pos, d) {
        this.pos = pos;
        this.initial_pos = pos;
        this.parent = parent;
        this.direction = d;
        this.original_direction = d;
    }

    reset() {
        this.count = 0;
        this.direction = this.original_direction;
    }

    next() {
        let nextDir = multi(this.direction, this.length)
        let next_position = add(this.pos,nextDir);
        let next_branch = new Branch(this, next_position, this.direction);
        return next_branch;
    }

    show() {
        if(this.parent != null){
            line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y, '#CD7F32')
        }
    }
}