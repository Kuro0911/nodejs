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

// Event loops

// const { readFile } = require("fs");

// console.log("start 1 task");

// readFile("./content/first.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(res);
//   console.info("complete first task");
// });
// console.log("start next task");

// better way to get async call backs

// const { readFile, writeFile } = require("fs").promises;

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const start = async () => {
//   try {
//     const first = await readFile("./content/first.txt", "utf-8");
//     const second = await readFile("./content/second.txt", "utf-8");
//     await writeFile(
//       "./content/async-result.txt",
//       "THIS IS THE PROMISE",
//       "utf-8"
//     );
//     console.log(first, second);
//   } catch (err) {
//     console.log(err);
//   }
// };

// Events

// const EventEmitter = require("events");
// var customEmitter = new EventEmitter();

// customEmitter.on("response", () => {
//   console.log("data recived");
// });
// customEmitter.emit("response");

// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//   res.end("welcome");
// });

// server.listen(5000);

// Streams

// const { createReadStream } = require("fs");
// const stream = createReadStream("./content/three.txt", { highWaterMark: 9000 });

// stream.on("data", (res) => {
//   console.log(res);
// });
// stream.on("error", (res) => {
//   console.log(res);
// });

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer();

// server.on("request", (req, res) => {
//   const fileStream = fs.createReadStream("./content/three.txt", "utf-8");
//   fileStream.on("open", () => {
//     fileStream.pipe(res);
//   });
//   fileStream.on("error", (err) => {
//     res.write("error vai");
//   });
// });
// server.listen(5000);

// EXPRESS JS

// const express = require("express");

// const app = express();
// app.get("/", (req, res) => {
//   res.status(200).send("Hello ji");
// });
// app.get("/about", (req, res) => {
//   res.send("about");
// });
// app.all("*", (req, res) => {
//   res.status(404).send("not found");
// });

// app.listen(5000, () => {
//   console.log("server is listening on 5000");
// });

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 5000;

// app.use(express.static("./public"));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./content/index.html"));
// });
// app.listen(port, () => {
//   console.log("server on " + port);
// });

// const express = require("express");
// const { data1 } = require("./uitls/MOCK_DATA");
// const app = express();

// to send data acc to what we want
// app.get("/api/data/:dataID", (req, res) => {
//   const data_to_send = data1.find(
//     (product) => product.index == req.params.dataID
//   );
//   res.json(data_to_send);
// });

// app.get("/api/query", (req, res) => {
//   console.log(req.query);
//   const { search, limit } = req.query;
//   let sorted_data = [...data1];
//   if (search) {
//     sorted_data = sorted_data.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     sorted_data = sorted_data.slice(0, Number(limit));
//   }
//   res.status(200).json(sorted_data);
// });

// MIDDLEWARE
// req = > middleware => res

// const logger = require("./uitls/logger");
// app.use("/api", logger);

// app.get("/", (req, res) => {
//   res.send("Home");
// });

// app.get("/about", (req, res) => {
//   res.send("ABOUT");
// });
// app.get("/api", (req, res) => {
//   res.send("API");
// });

// app.listen(5000, (req, res) => {
//   console.log("server start at 5000");
// });

// http METHODS

let { data1, data2 } = require("./uitls/MOCK_DATA");
const express = require("express");
const app = express();

// get method
app.get("/api/data/:dataNo", (req, res) => {
  if (req.params.dataNo === "1") {
    console.log("sent data 1");
    return res.json(data1);
  }
  console.log("sent data 2");
  res.json(data2);
});

// post method

// PARSE data for form
// app.use(express.urlencoded({ extended: false }));

// PARSE data for json
// app.use(express.json());

// app.post("/api/post/data/:dataNo", (req, res) => {
//   console.log("response");
//   console.log(req.body);
//   res.status(200).send("OK");
// });

// app.listen(5000, () => {
//   console.log("Server Listening at 5000");
// });
