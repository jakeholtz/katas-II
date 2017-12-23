var Tree = require('./tree.js');

// BASIC TREE
var basicTree = new Tree(8);
var treeBranchOne = basicTree.addChild(4); // first branch
treeBranchOne.addChild(2);
treeBranchOne.addChild(1);
var treeBranchTwo = basicTree.addChild(6); // second branch
var treeBranchThree = basicTree.addChild(10); // third branch
treeBranchThree.addChild(20);

// BINARY SEARCH TREE
var BST = new Tree(8);
var BSTBranchOne = BST.addChild(4); // first branch
BSTBranchOne.addChild(2);
BSTBranchOne.addChild(6);
var BSTBranchTwo = BST.addChild(10); // second branch
BSTBranchTwo.addChild(20);

// LARGE BINARY SEARCH TREE
var LBST = new Tree(25);
var bstD1_B1 = LBST.addChild(20);
var bstD1_B2 = LBST.addChild(36);

var bstD2_B1 = bstD1_B1.addChild(10);
var bstD2_B2 = bstD1_B1.addChild(22);
var bstD2_B3 = bstD1_B2.addChild(30);
var bstD2_B4 = bstD1_B2.addChild(40);

var bstD3_B1 = bstD2_B1.addChild(5);
var bstD3_B2 = bstD2_B1.addChild(12);
var bstD3_B3 = bstD2_B3.addChild(28);
var bstD3_B4 = bstD2_B4.addChild(38);
var bstD3_B4 = bstD2_B4.addChild(48);

// EXPORT EXAMPLES
module.exports.basicTree = basicTree;
module.exports.binarySearchTree = BST;
module.exports.largeBinarySearchTree = LBST;