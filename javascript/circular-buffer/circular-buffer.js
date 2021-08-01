//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.ary = new Array(size);
    this.size = size;
    this.oldest = null;
    this.newest = null;
  }

  nextId(id) {
    return (id + 1) % this.ary.length;
  }

  write(value) {
    const idx = this.newest !== null ? this.nextId(this.newest) : 0;

    // if next id is filled then buffer is empty
    if (this.ary[idx]) {
      throw new BufferFullError();
    }

    // write new value into buffer
    this.ary[idx] = value;
    this.newest = idx;

    // if buffer is empty point oldest to the new value
    if (this.oldest === null) {
      this.oldest = idx;
    }
  }

  read() {
    // throw if empty
    if (this.oldest === null) {
      throw new BufferEmptyError();
    }

    // empty current oldest value
    const oldest = this.ary[this.oldest];
    this.ary[this.oldest] = undefined;

    const next = this.nextId(this.oldest);

    // shift oldest to the next id
    if (this.ary[next]) {
      this.oldest = next;
      // if there is none then buffer is empty
    } else {
      this.oldest = null;
      this.newest = null;
    }

    return oldest;
  }

  // write into empty space (?) or overwrite oldest element
  overwrite(value) {
    const nextId = this.nextId(this.newest);

    if (!this.ary[nextId]) {
      this.write(value);
    } else {
      this.ary[this.oldest] = value;
      this.oldest = this.nextId(this.oldest);
    }
  }

  clear() {
    this.oldest = null;
    this.newest = null;
    this.ary = new Array(this.size);
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
