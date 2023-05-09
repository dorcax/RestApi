const express = require("express")
const controller =require("../controller/todo")
const router = express.Router()

router.route("/todoapp")
    .post(controller.createTodo)
    .get(controller.getTodoapp)
router.route("/todoapp/:id")
    .get(controller.todoUser)
    .patch(controller.editTodo)
    .delete(controller.deletetodo)

module.exports = router