
//Promise then
import fetch from 'node-fetch';
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

//maping to json is also a promise
//f this was callback we would have to do error handling for each one
promise
    .then(res => res.json())
    .then((user:any) => console.log("🌝", user.title))
    .catch(err => console.log("🌝", err));

console.log('🥪synchronous');
