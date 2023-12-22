const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data)  {
    let newNode = new Node(data);
    if (this.rootNode === null) {              //проверка, если не пустой первый узел
        this.rootNode = newNode;
    } else {
        this.addNode(this.rootNode, newNode);
    }
  }
  addNode(node, newNode) {                  //сравнение узла с текущим узлом
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.addNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.addNode(node.right, newNode);
        }
    }
  }

  has (data) {
    return this.search (this.rootNode, data);
  }
    
  search(node, data) {
      if (!node) {
        return false;
      } 
      
      if (data < node.data) {
        return this.search (node.left, data);
      } else if (data > node.data){
        return this.search (node.right, data);
      } else {
        return true;
      }
   }
    
  find(data) {
    return this.findNode (this.rootNode, data);
  }

  findNode (node, data) {
    if (!node) {
      return null;
    } 
    
    if (data < node.data) {
      return this.findNode (node.left, data);
    } else if (data > node.data){
      return this.findNode (node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.rootNode = this.removeNode (this.rootNode, data)
  }

  removeNode (node, data) {
    if (node === null) {
        return null;
      }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }
        let minRightNode = this.minNode(node.right);
        node.data = minRightNode.data;
        node.right = this.removeNode(node.right, minRightNode.data);
        return node;
        }
  }

  minNode (node) {
    while (node.left != null) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (!this.rootNode) {
      return null;
    } 
    
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    } 
    
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}


module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();

