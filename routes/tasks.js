const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getSingleTasks,
  updateSingleTask,
  delSingleTask,
} = require("../controlers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getSingleTasks)
  .patch(updateSingleTask)
  .delete(delSingleTask);

module.exports = router;
