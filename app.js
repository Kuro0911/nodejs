// GLOBALS - NO WINDOW !!

// __dirname -> path to curr directory
// __filename -> file name
// require -> function to use modules (common Js)
// module -> info about curr module
// process -> info about env where program is being executed

// Modules -> encapsulted code;
const names = require("./names"); // USE REQUIRE TO GET EXPORTED STUFF
const sayHello = require("./uitls/sayHi");
sayHello(names.n1);
