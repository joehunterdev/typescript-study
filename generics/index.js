"use strict";
// TypeScript file for the index page
//array: any[]
//array(number [] || string [])
//When you want to change data types
function getFirstElement(array) {
    return array[0];
}
const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers); //<number> could also be prepended
const strings = ["Hi", "im ", "stryyy"];
const firstString = getFirstElement(strings);
const map = new Map(); //Map<key, value> will infer string and number generic types generic types can also be generic types
map.set("key1", 1);
// with default you will need to override the default type if its different
const response = {
    data: {
        name: "Joe",
    },
    isError: false,
};
// const response: UserResponse<{name:string;age:number}> = { // can be done on call aswell
const responseDefaultOveride = {
    // can be done on call aswell
    data: {
        name: "Joe",
        age: 37,
    },
    isError: false,
};
//We can now narrow down the types
const responseBlog = {
    data: {
        name: "Blog",
    },
    isError: false,
};
console.log(response);
const responseExtended = {
    data: {
        status: 200,
    },
    isError: false,
};
function render(button) {
    if (button.kind === "round") {
        button.renderIcon();
    }
    else {
        button.renderText();
    }
    //   console.log(render({Button:"round"}));
    /*
    Quiz:
    TypeScript can always correctly infer a variables type. false
    Disable implicit variable type assignment with noImplicitAny
    __ == any = unknown
    ts will never infer types of array
    __ is mostly used with strings
    enums are string and numbers
    enums default to 0
    definilty typed is when a project that involves a central repostiory of definitions for npm packages which do not have types ie in tscongif
    when a class extends another class and replaces the members of its parents its called overriding
    
    */
    /*
    C# apis remember will have a model
    entities
    https://www.w3schools.com/typescript/typescript_basic_generics.php
    */ 
}
//   console.log(render({Button:"round"}));
/*
Quiz:
TypeScript can always correctly infer a variables type. false
Disable implicit variable type assignment with noImplicitAny
__ == any = unknown
ts will never infer types of array
__ is mostly used with strings
enums are string and numbers
enums default to 0
definilty typed is when a project that involves a central repostiory of definitions for npm packages which do not have types ie in tscongif
when a class extends another class and replaces the members of its parents its called overriding

*/
/*
C# apis remember will have a model
entities
https://www.w3schools.com/typescript/typescript_basic_generics.php
*/ 
