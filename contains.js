



class Node {  //defines what a node object has as attributes
    constructor(value) {
        this.value = value; //has  a value, value is a variable that a node object will have
        this.next = null; //pointer to the next node or related node, unless there is no other node, which is null in this case. Will always be null initially until I change that value of next. next is a variable and I'll be changing the value of that "next" variable
    }
}
testNode = new Node(5) //have to create a node object
console.log(testNode.value, testNode.next) //to access the node values, I have to use .value and .next in print statement

class SLL {
    constructor() {
        this.head = null //setting up a variable called "head" and head will end up being the 1st node in list. It's set to null. If set to "node" it would be connected to a SLL that already exists.
    }
    addFront(value) {
        if(this.head == null) { //null means we don't have any values already
            console.log("Enter if statement and create new node")
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

    contains(value) {
        var runner = this.head; //runner starts as the current head of the SLL

        while(runner) { //while loop runs until it hits null because the VERY last value of our LL will always be NULL.
            console.log(runner.value)

            if(runner.value == value) {
                return true //this means that the LL has our value in it, if it returns truc, we're leaving the while loop and ending the function
            }
            runner = runner.next //if not true, then runner moves to the next node until it encounters the value or it reaches the end, null.
        }
        return false //had return this, which would return the LL, which isn't meaningful to the function. By returning false means that contains did not find the value.
    }
}

newLinkedList = new SLL()
newLinkedList.addFront("cat")
newLinkedList.addFront("dog")
newLinkedList.addFront("bird")
console.log(newLinkedList.contains("horse"))

// console.log(newLinkedList.front())


