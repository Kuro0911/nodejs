// GLOBALS - NO WINDOW !!

// __dirname -> path to curr directory
// __filename -> file name
// require -> function to use modules (common Js)
// module -> info about curr module
// process -> info about env where program is being executed

// Modules -> encapsulted code;
// const names = require("./names"); // USE REQUIRE TO GET EXPORTED STUFF
// const sayHello = require("./uitls/sayHi");
// sayHello(names.n1);

// BUILD IN MODULES

// 1) OS module

// const os = require("os");

// info curr user
// const user = os.userInfo();
// console.log(user);

// SYSTEM UP-TIME
// console.log(os.uptime());

// 2) PATH module

// const path = require("path");
// console.log(path.sep);
// const abspath = path.resolve(__dirname, "utils", "sayHi.js");
// console.log(abspath);
// PATH STUFF

// 3) FS (SYNC)

const { readFileSync, writeFileSync } = require("fs");
