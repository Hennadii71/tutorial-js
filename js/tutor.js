// const user = {
//   userName: "hen",
//   age: 52,

//   changAge(newAge) {
//     this.age = newAge;
//   },
// };

// const admin = {
//   userName: "cat",
//   age: 30,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
// };

// user.changAge(65);

// console.log(user);
// console.log(admin);

// const arrs = Object.values(admin);

// for (const arr of arrs) console.log(arr);
// const values = Object.values(admin.skills)
// for (const value of values)

// console.log(value)

const friends = [
  { name: "Apple", age: 43, isOnline: true },
  { name: "Kiwi", age: 24, isOnline: true },
  { name: "Mango", age: 35, isOnline: false },
  { name: "Orange", age: 37, isOnline: true },
  { name: "Banana", age: 41, isOnline: false },
];

// function getName(keys) {
//   for (const key of keys) {
//     console.log(key.age);
//   }
// }

// getName(friends);

// Приклад делегування подій і відловлювання
// подій на батьківському елементі==========================

const refs = {
  firstEl: document.querySelector(".js-one"),
  secondEl: document.querySelector(".js-two"),
  thirdEl: document.querySelector(".js-third"),
  filterForm: document.querySelector(".js-filter-form"),
};

refs.firstEl.addEventListener("click", onClickElem);

function onClickElem(event) {
  console.log(event.currentTarget);
  console.log(event.target);
}
const saveFilter = {};
getFilters();

refs.filterForm.addEventListener("change", selectedFilter);

function selectedFilter(evt) {
  saveFilter[evt.target.name] = evt.target.value;
  console.log(saveFilter);
  localStorage.setItem("saveFilter", JSON.stringify(saveFilter));
}

refs.filterForm.addEventListener("reset", (evt) => {
  localStorage.removeItem("saveFilter");
});

function getFilters() {
  let persistedFilters = localStorage.getItem("saveFilter");
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    console.log(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      saveFilter[name] = value;
      refs.filterForm.elements[name].value = value;
      console.log(name, value);
    });
  }
}

import {sum} from './proto.js'
console.log(sum(34, 76));



