export default class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.int = this.loadFactor * this.capacity;
    this.Map = [];
    this.buckets = capacity
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.int;
    }

    return hashCode;
  }

  set(key, value) {
    const hashKey = this.hash(key);
    if (!this.Map[hashKey]) {
      this.Map[hashKey] = {
        key: key,
        value: value,
        node: null,
      };
    } else {
      let current = this.Map[hashKey];
      while (current.node != null && current.key != key) {
        current = current.node;
      }
      if (current.key === key) {
        current.value = value;
      } else {
        current.node = {
          key: key,
          value: value,
          node: null,
        };
      }
    }

    return this.Map;
  }

  get(key) {
    const hashKey = this.hash(key);
    if (this.Map[hashKey]) {
      let current = this.Map[hashKey];
      while (current.node != null && current.key != key) {
        current = current.node;
      }
      if (current.key === key) {
        return current.value;
      }
    } else return null;
  }

  has(key) {
    const hashKey = this.hash(key);
    if (this.Map[hashKey]) {
      let current = this.Map[hashKey];
      while (current.node != null && current.key != key) {
        current = current.node;
      }
      if (current.key === key) {
        return true;
      }
    } else return false;
  }

  remove(key) {
    const hashKey = this.hash(key);
    if (this.Map[hashKey]) {
      let current = this.Map[hashKey];
      let lastNode 
      while (current.node != null && current.key != key) {
        lastNode = current
        current = current.node;
      }
      if (current.key === key && current.node === null) {
        this.Map[hashKey].node = null
        console.log(this.Map);
        return true;
      }
      if (current.key === key && current.node != null){
        let endNode = current.node
        lastNode.node = endNode;
        return true;
      }
    } else return false;
  }

  length() {
   let length = 0
   for (let key in this.Map) {
    let current = this.Map[key]
    while(current.node != null){
      length++
      current = current.node
    }
    length++
   }
   return length
  }

  clear() {
    this.Map = [];
    return this.Map;
  }
  keys() {
    let allKeys = []
    for(let key in this.Map){
      let current = this.Map[key]
      while (current.node != null){
        allKeys.push(current.key)
        current = current.node
      }
      allKeys.push(current.key)
    }
    return allKeys
  }
  values() {
    let allValues = []
    for(let key in this.Map){
      let current = this.Map[key]
      while (current.node != null){
        allValues.push(current.value)
        current = current.node
      }
      allValues.push(current.value)
    }
    return allValues
  }
  entries() {
    let allEntries = [];
    for(let entry in this.Map){
      let current = this.Map[entry]
      while (current.node != null){
        allEntries.push([current.key, current.value])
        current = current.node
      }
      allEntries.push([current.key, current.value])
    }
    return allEntries
  }
}



