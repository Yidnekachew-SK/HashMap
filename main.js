import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";

const test1 = HashMap();

test1.set('apple', 'red');
test1.set('banana', 'yellow');
test1.set('carrot', 'orange');
test1.set('dog', 'brown');
test1.set('elephant', 'gray');
test1.set('frog', 'green');
test1.set('grape', 'purple');
test1.set('hat', 'black');
test1.set('ice cream', 'white');
test1.set('jacket', 'blue');
test1.set('kite', 'pink');
test1.set('lion', 'golden');
test1.set('moon', 'silver')


console.log(test1.length());
console.log(test1.get('dog'));
console.log(test1.remove('frog'));
console.log(test1.length());
console.log(test1.set('sky','lightblue'));
console.log(test1.set('apple','green'));
console.log(test1.entries());
console.log(test1.has('sky'));
console.log(test1.keys());
console.log(test1.values());
console.log(test1.clear());
console.log(test1.length());

const test2 = HashSet();

test2.set('apple');
test2.set('banana');
test2.set('carrot');
test2.set('dog');

console.log(test2.has('carrot'));
console.log(test2.length());
console.log(test2.remove('apple'));
console.log(test2.has('apple'));
console.log(test2.keys());