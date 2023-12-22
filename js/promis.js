
// const pro = new Promise((resolve, reject) => {
//   const value = 8;
//   if (value >= 3) {
//     resolve("OK");
//   }
//   reject("🔚ERROR");
// });

// pro
//   .then((result) => {
//     console.log(result);
//     return result;
//   })
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((errorResult) => {
//     console.log(errorResult);
//   })
//   .finally(()=>{
//     console.log('pofig');
//   });

const getOrder = (dish) => {
  const order = 1;
  return new Promise((resolve, reject) => {
    if (order > 0) {
      resolve("ok");
    }
    reject("no ok");
  });
};

getOrder("fish")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const getPokemonById = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
};
// getPokemonById(1).then(onFetchPokemon).catch(onFetchError);
// getPokemonById(2).then(onFetchPokemon).catch(onFetchError);
// getPokemonById(3).then(onFetchPokemon).catch(onFetchError);
// .then((pokemon) => {
//   console.log(pokemon);
// })
// .catch((error) => {
//   console.log(error);
// });

function onFetchPokemon(pokemon) {
  console.log(pokemon);
}
function onFetchError(error) {
  console.log(error);
}

const makePromise = () =>
  new Promise((resolve, reject) => {
    resolve("ok");
  });

makePromise().then((result) => {
  console.log(result);
});

const promise = fetch("https://jsonplaceholder.typicode.com/photos/3")

  .then((response) => response.json())
  .then((text) => console.log(text));

  


