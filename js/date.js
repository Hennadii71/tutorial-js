const date = Date.now();
const fullDate = new Date();

console.dir(date);

// const onSeconds = setInterval((evt) => {
//   console.log(new Date().getSeconds());
// }, 1000);
console.dir(fullDate.getFullYear());

const time = 5;
const stringTime = String(time).padStart(2, 0);

const numberTime = Number(stringTime);
console.log(stringTime);
console.log(numberTime);

