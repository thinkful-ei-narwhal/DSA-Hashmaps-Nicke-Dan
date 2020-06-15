const LL = require('./LL');
const LinkedList = require('./LL');

class HashMapLinked {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

  get(key) {
    const index = this._findSlot(key);

    if (this._hashTable[index] === undefined) {
      throw new Error('Key error');
    }

    let ll = this._hashTable[index].value;
    for (const node of ll) {
      if (node.value.key === key){
        return node.value.value;
      } else {
        return null;
      }
    }
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMapLinked.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMapLinked.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    const index = this._findSlot(key);

    if (!this._hashTable[index]) {
      this.length++;
      const LinkedL = new LL();
      this._hashTable[index] = LinkedL.insertFirst({
        key,
        value
      }, null);
    } else {
      this._hashTable[index].insertLast({
        key,
        value
      });
    }
    

  }

  // needs to delete from linked list if it finds it but not the list itself
  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }


    //slot.DELETED = true;

    for (const node of slot) {
      if (node.value.key === key){
        slot.remove(node);
      }
    }
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    const hash = HashMapLinked._hashString(key);
    return hash % this._capacity;
  }


  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        this.set(slot.key, slot.value);
      }
    }
  }
}

module.exports = HashMapLinked;
