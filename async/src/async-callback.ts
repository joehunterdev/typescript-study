//Called and retruns promise
function callbackFunction() {

  return new Promise((resolve) => {
        "🍔 Callback complete"
   });
}

// function logSomething(msg: any) {
//     const tick = Date.now();
//     console.log(`${msg} Elapsed: ${Date.now() - tick}`); 
// }

//2. then method is called on the prmise with log as its arg essentially calling when resolved

//This is possible because log is a function that takes one argument, 
//which matches the signature of the function expected by then
//Implicit passing of resolved value  just passing a reference to it. 
//- if you are passing pointer 
console.log('🍞 Synchronous 1');
callbackFunction().then(log); // Autmatically passed resolved value to logSomething

//callbackFunction().then((v) => log(v)); //(v) => { ... } i