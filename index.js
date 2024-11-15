// ---> Local Modules:
const { add, a } = require("./local");
const { a: a2, add: add2 } = require("./local-2");

// console.log(add(2, 3), a);
// console.log(add2(2, 3, 4), a2);

// ---------------------------------------
// ---> Built-in Modules:

const path = require("path");

console.log(path.join("/home/riyaz/Projects/learning-node/", "local.js"));
