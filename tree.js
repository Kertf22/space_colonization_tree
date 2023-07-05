
class Tree {
    leaves = [];
    branches = [];

    constructor() {
        for (let i = 0; i < 600; i++) {
            this.leaves.push(new Leaf())
        }

        const root = new Branch(null, { x: 300, y: 600 }, { x: 0, y: -1 });
        this.branches.push(root);

        let current = root;
        let found = false;

        while (!found) {
            for (let i = 0; i < this.leaves.length; i++) {
                var d = cal_dist(this.leaves[i].position, current.pos);
                if (d < max_dist) {
                    found = true;
                }
            }

            if (!found) {
                let branch = current.next();
                current = branch;
                this.branches.push(current);
            }
        }

    }


    show() {
        for (let i = 0; i < this.leaves.length; i++) {
            this.leaves[i].show()
        }

        for (let i = 0; i < this.branches.length; i++) {
            this.branches[i].show()
        }
    }

    grow() {
        for (let i = 0; i < this.leaves.length; i++) {
            let leaf = this.leaves[i];

            let closestBranch = null;
            let last_dist = Infinity;
            for (let j = 0; j < this.branches.length; j++) {
                const branch = this.branches[j];
                const d = cal_dist(leaf.position, branch.pos);

                if (d < min_dist) {
                    leaf.reached = true;
                    closestBranch = null;
                    break
                }
                if (d > max_dist) {
                    continue
                }

                if (closestBranch == null || d < last_dist) {
                    closestBranch = branch;
                    last_dist = d;
                }

            }

            if (closestBranch != null) {
                let new_direction = sub(leaf.position, closestBranch.pos);
                new_direction = normalize(new_direction);
                closestBranch.direction = add(closestBranch.direction, new_direction);
                closestBranch.count++;
            }
        }

        for (let i = this.leaves.length - 1; i >= 0; i--) {
            if (this.leaves[i].reached) {
                this.leaves.splice(i, 1);
            }
        }

        for (let i = this.branches.length - 1; i >= 0; i--) {
            const branch = this.branches[i];
            if (branch.count > 0) {
                branch.direction = div(branch.direction, branch.count + 1);
                let new_branch = branch.next();
                this.branches.push(new_branch);
                branch.reset();
            }

        }
    }
}