// TypeScript file for the index page

//array: any[]
//array(number [] || string [])
//When you want to change data types

function getFirstElement(array: any[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers); //<number> could also be prepended

const strings = ["Hi", "im ", "stryyy"];
const firstString = getFirstElement(strings);

const map = new Map<string, number>(); //Map<key, value> will infer string and number generic types generic types can also be generic types
map.set("key1", 1);

//type ApiResponse<Data> = {
type ApiResponse<Data extends object> = {
  data: Data;
  isError: boolean;
};

type ApiResponseWithDefault<Data = { status: number }> = {
  // saetting default type

  data: Data;
  isError: boolean;
};

// with default you will need to override the default type if its different
const response: ApiResponseWithDefault<{ name: string }> = {
  data: {
    name: "Joe",
  },
  isError: false,
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ type: string }>;
type StatusResponse = ApiResponse<{ status: number }>;

// const response: UserResponse<{name:string;age:number}> = { // can be done on call aswell

const responseDefaultOveride: UserResponse = {
  // can be done on call aswell
  data: {
    name: "Joe",
    age: 37,
  },
  isError: false,
};
//We can now narrow down the types
const responseBlog: BlogResponse = {
  data: {
    name: "Blog",
  },
  isError: false,
};

console.log(response);

type ApiResponseExtended<Data extends object ={status:number}> = {
  // always expect an object
  data: Data;
  isError: boolean;
};

const responseExtended: ApiResponseExtended = {
  data: {
    status: 200,
  },
  isError: false,
};


//In most cases you will just ahve a generic maby two types tops 

//Use generics when you have a function that has data with muliple different types and change

type Button =
  | { kind: "round"; renderIcon: () => void }
  | { kind: "normal"; renderText: () => void };
function render(button: Button) {
  if (button.kind === "round") {
    button.renderIcon();
  } else {
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