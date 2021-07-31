//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.ary = new Array(size);
    this.oldest = null;
    this.newest = null;
  }

  nextId(id) {
    return id + 1 - (this.ary.length - 1) || id + 1;
  }

  // add newest element
  write(value) {
    const idx = this.newest !== null ? this.nextId(this.newest) : 0;

    console.log(idx, this.ary);
    if (!this.ary[idx] && idx <= this.ary.length - 1) {
      this.ary[idx] = value;
    } else {
      throw new BufferFullError();
    }

    this.newest = idx;

    if (this.oldest === null) {
      this.oldest = idx;
    }

    // console.log('write', this);
  }

  // next idx
  // this.newest + 1 - (this.ary.length - 1)

  // if empty raise error
  // grab oldest element
  // shift oldest to the next one or null
  // return oldest el
  read() {
    if (this.oldest === null) {
      throw new BufferEmptyError();
    }

    const oldest = this.ary[this.oldest];
    const next = this.nextId(this.oldest);

    if (!this.ary[next]) {
      this.oldest = null;
    } else {
      this.oldest = next;
      this.ary[next] = undefined;
    }

    // console.log('read', this);
    return oldest;
  }

  // write into empty space (?) or overwrite oldest element
  overwrite() {
    throw new Error('Remove this statement and implement this function');
  }

  clear() {
    throw new Error('Remove this statement and implement this function');
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super();
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super();
  }
}
