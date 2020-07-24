//Singly linked lists:

class Node {
    constructor(value) { // def __init__(self, value):
      this.value = value;
      this.next = null;
    }
  }
  var a = new Node(7);
  var b = new Node(3);
  var c = new Node(1);
  a.next = b;// a --> b -->c
  b.next = c;
  console.log("A:", a.value);//OUTPUT ==> 7
  console.log("B:", b.value);//3
  console.log("C:", c.value);//1
  console.log(a.next.value);//3
  console.log(a.next.next.value);//1
  //console.log(a.next.next.next.value);//error c.next is null. so c.next.value can't have an attribute

var head = new Node(1);//setting first node to "head"
var node = head;
for (var i of [7, 3, 5, 2]) {
  var new_node = new Node(i);
  node.next = new_node;//2
  node = new_node;
}
console.log(head.value);//1
console.log(head.next.value);//7
console.log(head.next.next.next.value);//5

class SLL {
    constructor() {
      this.head = null;
    }
    addFront(val) {//harder
        // check if no nodes or one node
        // create a new node with the "val" parameter
        // assign new node to head
        // REMEMBER: was there already a node?
        // you may need to add more steps to keep everyone connected;
        // return "this"
    }
    removeFront() {//much quicker, maybe in two lines
      // change head to the next node in line, if there is one
      // think of 1st node as start line and the last node as the finish line
    }
  }
  var my_list = new SLL();
  my_list.addFront(7).addFront(2);
  var x = my_list.removeFront();
  console.log(x);//7 => the one that was removed and didn't point anywhere.