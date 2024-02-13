// functiona that returns a promise

type Seafoods = {
  [key: string]: string;
};

const getSeaFood = async (key: string) => {
  const foods: Seafoods = {
    fish: "🐟",
    shrimp: "🍤",
    crab: "🦀",
  };
  // take and automatically return a promise
  return foods;
};
//creates context to use await

const makePaella = async () => {
  //const ingredients = await getSeafood(); // await is sayin pause execution until promise is resolved

  //Avoid doing things concurrently like this no value is dependant on another so no need.
  //const fish = await seafood.fish;
  //const shrimp = await seafood.shrimp;
  //can levarage promise.all to do things concurrently

  const fish = getSeaFood("fish");
  const shrimp = getSeaFood("shrimp");
  const ingredients = await Promise.all([fish, shrimp]).catch((err) =>
    console.log(err)
  );

  console.log(JSON.stringify(ingredients));
};

//do non concurrent funk
// with cathc errror and check exec

console.log("🍞 Synchronous 1");
//makePaella().then(log);
console.log("🍞 Synchronous 2");
