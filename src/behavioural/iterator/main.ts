import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();

dataStructure.addItems('A', 'B', 'C', 'D', 'E', 'F');

console.log(dataStructure);

// If I did not implement the [Symbol.iterator]() function, neither a for nor a destructuring will work.
// Because this methods asks my dataStructure an iterator.
// If I use this methods but not implements the [Symbol.iterator] method, it won't return a iterator so will give me an error.

const [a, b] = dataStructure;

console.log('Stolen:', a, b);
console.log('Executing a lot of things');

const [c, ...rest] = dataStructure;
console.log(c, rest);

// if iterator was public:
// dataStructure.iterator.reset()

dataStructure.resetIterator();

for (const data of dataStructure) {
  console.log(data);
}

console.log(dataStructure);

console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
