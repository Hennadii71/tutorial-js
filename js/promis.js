const pro = new Promise((resolve, reject) => {
  const value = 2;
  if (value >= 3) {
    resolve("OK");
  }
  reject("error");
});

pro.then(
  (result) => {
    console.log(result);
  },
  (resultError) => {
    console.log(resultError);
  }
);
console.log(pro);
