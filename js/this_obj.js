// const user = {
// userName: 'Hennadii',
// price: 45,
// units: 10,
// totalPrice() {

// },

// };

// user.isShowName = showName;

// user.isShowName();

// function showName() {
// console.log(this.price * this.units);
// }

// console.log(user);

// function sum(x, y, z) {
// return this.a + this.b + x + y + z;
// }

// const objW = {
//     a: 3,
//     b: 6,
// }

// console.log(sum.call(objW, 5, 20, 30));
// console.log(sum.apply(objW, [10,20,30]));

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    console.log(this);
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();

const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  console.log(key); // barks, eats
}

console.log(Object.values(dog));

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const jon = new User(43, "Jon");
console.log(jon);

const deiv = new User(44, "Deiv");
console.log(deiv);

function Car(value, model) {
  this.color = value;
  this.name = model;
}

const Car1 = new Car("red", "Audi");

console.log(Car1);
