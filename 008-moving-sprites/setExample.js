let things = new Set(['left', 'top', 'right', 'bottom']);
let nums = ['one', 'two', 'three'];

things.add('anyValue');
	things.delete('top');

console.log(things.has('left'));
console.log(things.size);
console.log(things);
things.clear();

console.log(things);
things = new Set(nums);

console.log(things);
console.log(things.size);

things.forEach(e => console.log(e));