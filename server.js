// project 1 => to-do

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const port = 3000;
app.use(express.json());
app.get("/api/hello", (req, res) => {
  res.send("task data");
});

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')  -> get all the tasks
// app.post('/api/v1/tasks')  -> create new tasks
// app.get('/api/v1/tasks/:id')  -> get id task only
// app.patch('/api/v1/tasks/:id')  -> update id task
// app.delete('/api/v1/tasks')  -> del task

app.listen(port, console.log(`server is up on ${3000}...`));
