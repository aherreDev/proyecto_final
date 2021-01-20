const BinaryTree = require('../models/BinaryTree')._default;


  let btree = new BinaryTree()
  let arr = [1,'-',2,'*',2,'+',5]
  
  for (let i = 0; i < arr.length; i++) {
    btree.addRecursive(arr[i])
  }
  
  console.log('\nPreOrder: ')
  btree.preOrder()
  console.log('\nPostOrder: ')
  btree.postOrder()