//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class LinkedList {
  push(value) {
    const node = new Node(value, this.last);
    if (this.last) {
      this.last.next = node;
    } else {
      this.first = node;
    }
    this.last = node;
    console.log(this);
  }

  pop() {
    const last = this.last.value;

    // length > 1
    if (this.last.prev) {
      this.last.prev.next = undefined;
      this.last = this.last.prev;
    } else {
      this.last = undefined;
    }

    console.log(this);
    return last;
  }

  shift() {
    const first = this.first.value;

    // length > 1
    if (this.first.next) {
      this.first.prev = undefined;
      this.first = this.first.next;
    } else {
      this.first = undefined;
    }

    return first;
  }

  unshift() {
    throw new Error('Remove this statement and implement this function');
  }

  delete() {
    throw new Error('Remove this statement and implement this function');
  }

  count() {
    throw new Error('Remove this statement and implement this function');
  }
}
