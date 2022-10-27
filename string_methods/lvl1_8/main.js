const text = "Sam is going to codingschool";
const sam = text.slice(0, 3);
const is = text.slice(4, 6);
const going = text.slice(7, 12);

const samBig = sam.toUpperCase();
const goingBig = going.toUpperCase();

console.log(`${samBig} ${is} ${goingBig}`);