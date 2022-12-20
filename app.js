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

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first);
// console.log(second);

// writeFileSync(
//   "./content/three.txt",
//   "this is the third txt file made using the write file sync",
//   "utf-8"
// );

// 3) FS (ASYNC)

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const first = res;
//     readFile("./content/second.txt", "utf-8", (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const second = res;
//         writeFile(
//           "./content/async-result",
//           `data : ${first} and ${second}`,
//           (err, res) => {
//             if (err) {
//               console.log(err);
//             } else {
//               console.log("ok");
//             }
//           }
//         );
//       }
//     });
//   }
// });

// 4) HTTP MODULE
// basic server
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("hello world");
//   } else if (req.url === "/about") {
//     res.write("about section");
//   } else {
//     res.write(
//       `<h1>Oops!</h1> <h1>The Page you are Looking for does not exist!!</h1><a href="/">back to slums </a>`
//     );
//   }
//   res.end();
// });

// server.listen(5000);
