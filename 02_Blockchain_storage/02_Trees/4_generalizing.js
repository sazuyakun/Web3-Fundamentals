class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        this.root = this._addRecursively(this.root, node);
    }

    _addRecursively(current, node) {
        if (current === null) return node;

        if (node.data < current.data) {
            current.left = this._addRecursively(current.left, node);
        } else {
            current.right = this._addRecursively(current.right, node);
        }

        return current;
    }
}

module.exports = Tree;
