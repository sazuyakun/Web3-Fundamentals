class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null)
    }
}
// Export both classes
module.exports = {
  Trie,
  TrieNode
};
