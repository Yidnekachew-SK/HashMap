import { HashMap } from "./hashMap.js";

const test = HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 'silver')


console.log(test.length());
console.log(test.get('dog'));
console.log(test.remove('frog'));
console.log(test.length());
console.log(test.set('sky','lightblue'));
console.log(test.set('apple','green'));
console.log(test.entries());
console.log(test.has('sky'));
console.log(test.keys());
console.log(test.values());
console.log(test.clear());
console.log(test.length());
