// To Do 2
// This chapter you familiarized yourself with basic manipulation of the singly linked list data structure. Here are concepts used in this chapter’s challenges.

// classes and objects 
// object constructors 
// local variables vs. heap allocations
// push() and pop() 
// pointers 
// private vs. public
// === vs. == 
// reference vs. value 
// time vs. space tradeoff
// Here is what we have so far for ListNode:

// function ListNode(value) {
//     this.val = value;
//     this.next = null;
//     this.front = function() { ... }
//     // more functions here
// }


class Node {  //defines what a node object has as attributes
    constructor(value) {
        this.value = value; //has  a value, value is a variable that a node object will have
        this.next = null; //pointer to the next node or related node, unless there is no other node, which is null in this case. Will always be null initially until I change that value of next. next is a variable and I'll be changing the value of that "next" variable
    }
}
testNode = new Node(5) //have to create a node object
//console.log(testNode.value, testNode.next) //to access the node values, I have to use .value and .next in print statement

class SLL {
    constructor() {
        this.head = null //setting up a variable called "head" and head will end up being the 1st node in list. It's set to null. If set to "node" it would be connected to a SLL that already exists.
    }
    addFront(value) {
        if(this.head == null) { //null means we don't have any values already
            //console.log("Enter if statement and create new node")
            this.head = new Node(value);//creates a new node based on the value we give it, and it sets the head value of SLL to that node.
            return this //this is the SLL object
        } else {
            var restOfList = this.head;   //stores old node that was at the front of the list, we know it has at least one object and it's pointing to head. Temporarily stores the existing list in this line
            this.head = new Node(value); //creates a new node that's now the header. head will now point to a new node (creating a new - at least 2nd node). 1st element of linked list will now be this new node. At this point restOfList variable is NOT part of SLL because head is pointing to new node.
            this.head.next = restOfList; //Now restOfList, which contains old node or old list (if more than one node - it would have all of those), the new node I just created is now connected to restOfList and new Node is at the FRONT.
            return this //returns the SLL with new value at the FRONT and the front is now the head.
        }
    }
// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        this.head = this.head.next;//LL is this and looking at the header element of that LL and header element has a node (so it has a value AND it has a next) So here we change the header element to be this next node. It's a node, but it could be connected to another node, which makes it a linked list.
        return this //returns the SLL
    }

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front() {
        return this.head.value //looking at our SLL, with a head value variable, head variable consists of a node, and node has a value, which is what it's accessing with the . value (dot value)
    }
// SList: Second to Last Value
// Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?
    second_to_last() {
        var runner = this.head;//runner assigned to first node
        var counter = 0;
            while(runner) {
            console.log(runner)
                if(runner.next.next == null){
                    console.log("entered if statement")
                    return runner.value
                }
                counter += 1;
                runner=runner.next
            }
        console.log("List not long enough")
        return this
    }

    length() {
        var runner = this.head;//runner assigned to first node
            var counter = 0; //this is how I'm counting how many nodes there are
            while(runner) {
                counter += 1;
                runner=runner.next
            }
            return counter
    }


// SList: Delete Given Node
// Create ListNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list (it won’t be the last), and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by .next.
    removeSelf(n1) {
        var runner = this.head;
        //case 1: node is at front of list
        if(runner.value==n1){
            console.log("node found at front of list")
            return runner.next
        }
        //case 2: node is not at front of list
        while(runner && runner.value != n1){
            var prev = runner;
            runner = runner.next; //after this runner will be at the node we want to remove
        }
        if(runner){
            //unlink runner from our list
            prev.next = runner.next;
            console.log("node found and deleted")
        }
        return this

    }



    addBack(value) {
        var runner = this.head;
        while(runner.next) {
            runner = runner.next
        }
        runner.next = new Node(value);
        return this
    }
}

// SList: Copy
// Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.

function copyNodes(pointer) {

    var runner = pointer.head;
    linkedListPointerCopy = new SLL();
    console.log(runner)
    linkedListPointerCopy.addFront(5);
    while(runner.next) {
        console.log(runner.value)
        //add runner.value to the back
        //linkedListPointerCopy.addBack(runner.value);
        runner = runner.next;
    }
    return linkedListPointerCopy
}

// SList: Filter
// Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or higher than highVal. Return the new list.rite a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

function filter(headNode, lowVal, highVal) {
    var runner = headNode.head;//runner assigned to the input node
    console.log(typeof runner)
        while(runner) {
            console.log(runner.value)
            if(runner.value < lowVal || runner.value > highVal) {
                console.log(runner)
                headNode.removeSelf(runner.value);
                runner=headNode.head;
            }
            runner=runner.next;
        }
        return headNode
}

    node1 = new Node(1)

    newLinkedList = new SLL()
    newLinkedList.addFront(5) //.addFront(1).addFront(3).addFront(5) can call this way if methods are linked with return this
    newLinkedList.addFront(3)
    newLinkedList.addFront(1)
    //newLinkedList2 = copyNodes(newLinkedList)
        
    console.log(filter(newLinkedList, 2, 4))
    //console.log(newLinkedList.removeSelf(1))

    
    // console.log(newLinkedList)
    // console.log(newLinkedList.front())
