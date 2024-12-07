export default class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.Map = new Array(capacity).fill(null);
    this.mapLength = 0;
    this.maxLoad = this.loadFactor * this.capacity
  }

  hash(key) {
    let hashCode = 0;
    let int = this.loadFactor * this.capacity;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % int;
    }

    return hashCode;
  }

  expand() {
      let oldMap = this.Map;
      this.capacity *= 2;
      this.maxLoad = this.capacity * this.loadFactor
      this.mapLength = 0;
      this.Map = new Array(this.capacity).fill(null);
      for (let key in oldMap) {
        let current = oldMap[key];
        if (current === null) {
          continue;
        }
        while (current.node != null) {
          this.set(current.key, current.value);
          current = current.node;
        }
        this.set(current.key, current.value);
      }
    
  }

  set(key, value) {
    const hashKey = this.hash(key);
    if (this.Map[hashKey] === null) {
      this.Map[hashKey] = {
        key: key,
        value: value,
        node: null,
      };
      this.mapLength++;
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
        this.mapLength++;
      }
    }
    if (this.mapLength > this.maxLoad) {
      this.expand();
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
      let lastNode;
      while (current.node != null && current.key != key) {
        lastNode = current;
        current = current.node;
      }
      if (current.key === key && current.node === null) {
        this.Map[hashKey].node = null;
        console.log(this.Map);
        return true;
      }
      if (current.key === key && current.node != null) {
        let endNode = current.node;
        lastNode.node = endNode;
        return true;
      }
    } else return false;
  }

  length() {
    return this.mapLength;
  }

  clear() {
    // this.Map = [];
    return this.maxLoad
  }
  keys() {
    let allKeys = [];
    for (let key in this.Map) {
      let current = this.Map[key];
      if (current === null) {
        continue;
      }

      while (current.node != null) {
        allKeys.push(current.key);
        current = current.node;
      }
      allKeys.push(current.key);
    }
    return allKeys;
  }
  values() {
    let allValues = [];
    for (let key in this.Map) {
      let current = this.Map[key];
      if (current === null) {
        continue;
      }
      while (current.node != null) {
        allValues.push(current.value);
        current = current.node;
      }
      allValues.push(current.value);
    }
    return allValues;
  }
  entries() {
    let allEntries = [];
    for (let entry in this.Map) {
      let current = this.Map[entry];
      if (current === null) {
        continue;
      }
      while (current.node != null) {
        allEntries.push([current.key, current.value]);
        current = current.node;
      }
      allEntries.push([current.key, current.value]);
    }
    return allEntries;
  }
}
