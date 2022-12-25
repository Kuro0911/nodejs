const getAllTasks = (req, res) => {
  res.send("all itms");
};
const createTask = (req, res) => {
  res.json(req.body);
};
const getSingleTasks = (req, res) => {
  res.send("Single itms");
};
const updateSingleTask = (req, res) => {
  res.send("update itms");
};
const delSingleTask = (req, res) => {
  res.send("del itms");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTasks,
  updateSingleTask,
  delSingleTask,
};
