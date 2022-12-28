// Node factory
function Node(val){
    this.value=val;
    this.left=null;
    this.right=null;
} 

Node.prototype.addNode = function(val){
    let node = val
    if(this.value > node.value){
        if(this.left === null){
            this.left = node
        }else{
            this.left.addNode(val)
        }
    }else if(this.value < node.value){
        if(this.right === null){
            this.right=node
        }else{
            this.right.addNode(val)
        }
    }
}

Node.prototype.traverseInOrder = function(){
    if(this.left !== null){
        this.left.traverseInOrder()
    }
    console.log(this.value);
    if(this.right !== null){
        this.right.traverseInOrder()
    }
}

Node.prototype.isEqual = function(value){
    let result = 0
    console.log(this.value , value);
    if(this.value === value){
        console.log('true');
        result +=1
    }else {
        if(this.left !== null){
            result+=this.left.isEqual(value)
        }
        if(this.right !== null){
            result+=this.right.isEqual(value)
        }
    }
    return result
}

Node.prototype.isEqualBinary = function(value){
    if(this.value === value){
        return this
    }else if(this.value > value && this.left !== null){
        return this.left.isEqualBinary(value)
    }else if(this.value < value && this.right !== null){
        return this.right.isEqualBinary(value)
    }
    return false
}

Node.prototype.getDepth = function(value){
    let depth=0
    if(this.value === value){
        depth += 0 
    }else if(this.value > value && this.left !== null){
        depth += 1 + this.left.getDepth(value)
    }else if(this.value < value && this.right !== null){
        depth += 1 + this.right.getDepth(value)
    }
    return depth
}

Node.prototype.getHeight = function(){
    console.log(this);
    let height = 0 
    if(this.left === null && this.right===null){
        console.log('found');
        height+=0
    }else if(this.left === null ){
        console.log('go right');
        height += 1 + this.right.getHeight()
    }else if(this.right === null){
        console.log('go left');
        height += 1 + this.left.getHeight()
    }else{
        height += 1 + Math.max(this.left.getHeight(), this.right.getHeight())
    }
    return height
}



// Tree factory
function Tree(){
    this.root=null
}

Tree.prototype.addValue = function(val){
    let value = new Node(val)
    if(this.root === null){
        this.root = value
    }else{
        this.root.addNode(value)
    }
}

Tree.prototype.inOrder = function(){
    this.root.traverseInOrder()
}

Tree.prototype.search = function(value){
    return this.root.isEqual(value)
}

Tree.prototype.searchBinary = function(value){
    return this.root.isEqualBinary(value)
}

Tree.prototype.getDepth = function(value){
    return this.root.getDepth(value)
}

Tree.prototype.getHeight = function(value){
    let node = this.searchBinary(value)
    return node.getHeight()
}

// Example
let tree = new Tree()
tree.addValue(5)
tree.addValue(2)
tree.addValue(1)
tree.addValue(7)
tree.addValue(9)
tree.addValue(3)
tree.addValue(0)
tree.addValue(8)

// for(let i=0; i<10; i++){
//     tree.addValue(Math.floor(Math.random()*100))
// }

console.log(tree);
tree.inOrder()
// console.log(tree.searchBinary(9));
// console.log(tree.searchBinary(0));
// console.log(tree.getDepth(1));
console.log('height'+tree.getHeight(5));