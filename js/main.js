const convertToRoman = (num) => {
  const ref = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  const result = [];
  ref.map((arr) => {
    for (let i = 0; num >= arr[1]; i += 1) {
      result.push(arr[0]);
      num -= arr[1];
    }
  });

  return console.log(result.join(""));
};

convertToRoman(11);

let counter = 0;


  for (let index = 0; index < 2; index++) {
    counter++;
    
  }




console.log(counter);
