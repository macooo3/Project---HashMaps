import HashMap from "./script.js";

const test = new HashMap(16, 0.75);
test.set("apple", "red");
test.set("banana", "yellow"); //9
test.set("carrot", "orange"); //3
test.set("dog", "brown"); //8
test.set("elephant", "gray"); //9
test.set("frog", "green"); //4
test.set("grape", "purple"); //11
test.set("hat", "black"); //11
test.set("ice cream", "white"); //5
test.set("jacket", "blue"); //2
test.set("kite", "pink"); //3
test.set("lion", "golden"); //8
// test.set('house', 'white')
// console.log(test.Map);
console.log(test.length());
console.log(test.get("trash"));
// console.log(test.remove("lion"));
console.log(test.keys());
console.log(test.values());
console.log(test.entries());