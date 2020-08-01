// To Do 1
// Let’s build a basic Binary Search Tree. These challenges start with the following reference definitions:

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    // BST: ADD
    add(value) {
        if(this.root) { //if root exists - that means it's not null
            var runner = this.root;//set a runner that will always look at the current root
            while(runner) {
                if(value>runner.value) {//looks to see if current value is greater than the runner's value
                    if(runner.right){//if it is greater, then it will check if runner already has a right node
                        runner = runner.right;//if it does have a right node, change current runner to be that right node
                    } else {
                        runner.right = new Node(value);//if it doesn't have a right node already, set it to this new node
                        return this//return here because we've successfully added it
                    }
                } else {
                    if(runner.left){// now it's doing the same thing but checking the left side
                        runner = runner.left;
                    } else {
                        runner.left = new Node(value);
                        return this
                    }
                }
            }
        }
        this.root = new Node(value);//alternative is there's no root already and the root is set to this new value
        return this
    }
    contains(value) {
        var runner = this.root;
        while (runner) {
            if (value == runner.value) {//if the value I'm looking for is the current runner's value
                return true;//if so, it's found and the tree contains it and it's the end of the function.
            }
            if (value < runner.value) {//if the value I'm looking for is less than the current runner's value
                if (!runner.left) { //checking if you've reached a null case on the left, which means I've exhausted values that are low enough to have possibly been a value
                    return false;//value NOT found
                }
                runner = runner.left;//haven't reached a null, so keep looking on the left side
            } else {
                if (!runner.right) { //alternative is value is greater than runner's current value, so look on the right side
                    return false;//value NOT found
                }
                runner = runner.right;
            }
        }
        return false;//we hit this if the tree is completely empty and it hit null right away.
    }
    min() {
        var runner = this.root;
        var min = this.root.value;//prestores a minimum as the root's value
        while(runner.left) {
            if(runner.left.value < min) {//looks down the left side of the tree
                min = runner.left.value;//if it finds a value less than the current min, it resets the current min to this new value
            }
            runner = runner.left;//continues to look on the next left branch
        }
        return min//when done with all the branches, leaves while loop and returns the smallest number found
    }
    max() {
        var runner = this.root;
        var max = this.root.value;
        while(runner.right) {
            if(runner.right.value > max) {
                max = runner.right.value;//goes down the right side of the tree
            }
            runner = runner.right;
        }
        return max//when done returns the largest number found
    }
    size() {
        if (this.root === null) {//no nodes in the tree
            return 0;
        }
        function sizeHelp(runner) {//helper function 
            if (!runner) { //similar to sum function with recursion
                return 0;//returns zero at the top of the tree
            }
            return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);//found a new node, check the left as many times as possible, the same on the right and sum them all ( the counter here is the recursive 1 + )
        }
        return sizeHelp(this.root);//returns the sum  - gives the number of nodes in the tree
    }
    isEmpty() {
        if(this.root) {
            return false
        }
        return true
    }
}
// creating a new BST
tree = new BST();

// adding some nodes
tree.add(10).add(20).add(5).add(7).add(21).add(2).add(9).add(17).add(6).add(4)

// searching for value
console.log(tree.contains(17))
// searching for value that doesn't exist in the tree
console.log(tree.contains('hello'))

// testing min
console.log(tree.min())
// testing max
console.log(tree.max())

// testing size
console.log(tree.size())

//testing isEmpty
console.log(tree.isEmpty())
emptyTree = new BST();
console.log(emptyTree.isEmpty())

// printing our tree
console.log(tree);




// BST: Contains
// Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.



// BST: Min
// Create a min() method on the BST class that returns the smallest value found in the BST.



// BST: Max
// Create a max() BST method that returns the largest value contained in the binary search tree.



// BST: Size
// Write a size() method that returns the number of nodes (values) contained in the tree.



// BST: Is Empty
// Create an isEmpty() method to return whether the BST is empty (whether it contains no values).