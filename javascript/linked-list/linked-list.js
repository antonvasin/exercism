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
  length = 0;

  push(value) {
    const node = new Node(value, this.last);
    if (this.last) {
      this.last.next = node;
    } else {
      this.first = node;
    }
    this.last = node;
    this.length++;
  }

  pop() {
    const last = (this.last && this.last.value) || undefined;

    // length > 1
    if (this.last.prev) {
      this.last.prev.next = undefined;
      this.last = this.last.prev;
    } else {
      this.last = undefined;
    }

    this.length--;
    return last;
  }

  shift() {
    const first = (this.first && this.first.value) || undefined;

    // length > 1
    if (this.first.next) {
      this.first.prev = undefined;
      this.first = this.first.next;
    } else {
      this.first = undefined;
    }

    this.length--;
    return first;
  }

  unshift(value) {
    const node = new Node(value, undefined, this.first);
    if (this.first) {
      this.first.prev = node;
    }
    this.first = node;
    this.length++;
  }

  delete() {
    throw new Error('Remove this statement and implement this function');
  }

  count() {
    return this.length;
  }
}
