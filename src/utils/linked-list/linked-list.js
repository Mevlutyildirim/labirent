import Node from "./node";
import Comparator from '../other/compartor';

export default function LinkedList(compatorFunction) {
  let head = null;
  let tail = null;
  let compare = new Comparator(compatorFunction);
  return {
    append(value) {
      const newNode =  Node(value);
  
      // If there is no head yet let's make new node a head.
      if (!head) {
        head = newNode;
        tail = newNode;
  
        return this;
      }
  
      // Attach new node to the end of linked list.
      tail.next = newNode;
      tail = newNode;
  
      return this;
    },
    prepend(value) {
      // Make new node to be a head.
      const newNode = Node(value, head);
      head = newNode;
  
      // If there is no tail yet let's make new node a tail.
      if (!tail) {
        tail = newNode;
      }
  
      return this;
    },

    delete(value) {
      if (!head) {
        return null;
      }
  
      let deletedNode = null;
  
      // If the head must be deleted then make next node that is differ
      // from the head to be a new head.
      while (head && compare.equal(head.value, value)) {
        deletedNode = head;
        head = head.next;
      }
  
      let currentNode = head;
  
      if (currentNode !== null) {
        // If next node must be deleted then make next node to be a next next one.
        while (currentNode.next) {
          if (compare.equal(currentNode.next.value, value)) {
            deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
          } else {
            currentNode = currentNode.next;
          }
        }
      }
  
      // Check if tail must be deleted.
      if (compare.equal(tail.value, value)) {
        tail = currentNode;
      }
  
      return deletedNode;
    },  

    find({ value = undefined, callback = undefined }) {
      if (!head) {
        return null;
      }
  
      let currentNode = head;
  
      while (currentNode) {
        // If callback is specified then try to find node by callback.
        if (callback && callback(currentNode.val)) {
          return currentNode;
        }
  
        // If value is specified then try to compare by value..
        if (value !== undefined && compare.equal(currentNode.val, value)) {
          return currentNode;
        }
  
        currentNode = currentNode.next;
      }
  
      return null;
    },
    deleteHead() {
      if (!head) {
        return null;
      }
  
      const deletedHead = head;
  
      if (head.next) {
        head = head.next;
      } else {
        head = null;
        tail = null;
      }
  
      return deletedHead;
    },
    deleteTail() {
      const deletedTail = tail;
  
      if (head === tail) {
        // There is only one node in linked list.
        head = null;
        tail = null;
  
        return deletedTail;
      }
  
      // If there are many nodes in linked list...
  
      // Rewind to the last node and delete "next" link for the node before the last one.
      let currentNode = head;
      while (currentNode.next) {
        if (!currentNode.next.next) {
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }
  
      tail = currentNode;
  
      return deletedTail;
    },
    fromArray(values) {
      values.forEach(value => this.append(value));
  
      return this;
    },
    toArray() {
      const nodes = [];
  
      let currentNode = head;
      while (currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
      }
  
      return nodes;
    },

  };
}
