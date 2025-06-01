class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves
        this.concat = concat
    }
    getRoot() {
        return this.r_getRoot(this.leaves);
    }
    r_getRoot(nodes = this.leaves) {
        // Base case: only one node — that's the root
        if (nodes.length === 1) {
            return nodes[0];
        }

        // Combine each pair of nodes to form the next layer
        const nextLayer = [];
        for (let i = 0; i < nodes.length; i += 2) {
            // If there's an odd number of nodes, duplicate the last one
            const left = nodes[i];
            const right = i + 1 < nodes.length ? nodes[i + 1] : nodes[i];
            const combined = left === right ? left : this.concat(left, right);
            nextLayer.push(combined);
        }

        // Recurse to compute the root from the next layer
        return this.r_getRoot(nextLayer);
    }
}

module.exports = MerkleTree;
