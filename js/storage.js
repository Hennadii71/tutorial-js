// const obj = {
//   name: "Hennadii",
//   age: 52,
// };

// let stringObj = JSON.stringify(obj);
// console.log(stringObj);

// let objName = JSON.parse(stringObj);
// console.log(objName);

const refs = {
  btnLocal: document.querySelector(".js-btn-storage"),
  btnSession: document.querySelector(".js-btn-session"),
};

refs.btnLocal.addEventListener("click", () => {
  localStorage.setItem("local_storage", "txt");
});

refs.btnSession.addEventListener("click", (evt) => {
  sessionStorage.setItem("session_storage", "test txt");
  console.dir(evt.target);
});


