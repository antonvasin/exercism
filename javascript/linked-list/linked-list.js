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
    if (this.last) {
      const last = this.last && this.last.value;

      if (this.last === this.first) {
        this.last = undefined;
        this.first = undefined;
      } else {
        this.last = this.last.prev;
      }

      this.length--;
      return last;
    } else {
      this.last = undefined;
    }
  }

  shift() {
    if (this.first) {
      const first = this.first && this.first.value;

      if (this.first === this.last) {
        this.last = undefined;
        this.first = undefined;
      } else {
        this.first = this.first.next;
      }

      this.length--;
      return first;
    } else {
      return undefined;
    }
  }

  unshift(value) {
    const node = new Node(value, undefined, this.first);
    if (this.first) {
      this.first.prev = node;
    }
    this.first = node;
    this.length++;
  }

  delete(value) {
    let scan = true;
    let node = this.first;

    while (scan) {
      if (node.value === value) {
        if (node.prev) {
          if (node === this.last) {
            this.last = node.prev;
          }

          node.prev.next = node.next;
        }

        if (node.next) {
          if (node === this.first) {
            this.first = node.next;
          }
          node.next.prev = node.prev;
        }

        scan = false;
        this.length--;
      } else if (node.next) {
        node = node.next;
      } else {
        scan = false;
      }
    }
  }

  count() {
    return this.length;
  }
}
