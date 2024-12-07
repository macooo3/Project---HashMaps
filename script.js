class HashMap {
constructor(loadFactor, capacity){
    this.loadFactor = loadFactor
    this.capacity = capacity
    this.int = this.loadFactor * this.capacity
    this.Map ={}
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
 const hashKey = this.hash(key)
  this.Map[hashKey] = value
  return this.Map
}

}


const test = new HashMap(16, 0.75);
// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')
console.log(test.set('apple', 'red'));