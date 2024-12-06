class HashMap {
  constructor(loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.int = this.loadFactor * this.capacity;
    this.Map = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.int ;
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
      if(current.key === key) {
        current.value = value
      }
    else { current.node = {
        key: key,
        value: value,
        node: null,
      };}
    }

    return this.Map
  }

  get(key){
    const hashKey = this.hash(key);
    if (this.Map[hashKey]){
      let current = this.Map[hashKey]
      while (current.node != null && current.key != key) {
        current = current.node;
      }
      if(current.key === key) {
       return current.value 
      } 
    } else return null
  }

has(key){
  const hashKey = this.hash(key);
  if (this.Map[hashKey]){
    let current = this.Map[hashKey]
    while (current.node != null && current.key != key) {
      current = current.node;
    }
    if(current.key === key) {
     return true
    } 
  } else return false
}

remove(key){

}

  length(){
    return this.Map.length
  }

  clear(){
    this.Map= []
    return this.Map
  }
  keys(){
    
  }
  values(){

  }
  entries(){

  }
}

const test = new HashMap(16, 0.75);
test.set("apple", "red");
test.set("apple", "blue");
test.set('banana', 'yellow') //9
test.set('carrot', 'orange') //3
test.set('dog', 'brown') //8
test.set('elephant', 'gray') //9
test.set('frog', 'green') //4
test.set('grape', 'purple') //11
test.set('hat', 'black') //11
test.set('ice cream', 'white') //5
test.set('jacket', 'blue') //2
test.set('kite', 'pink') //3
test.set('lion', 'golden') //8
console.log(test.set('house', 'white'));
console.log(test.length());
console.log(test.get('trash'));