const Todo = require("../model/todo")
module.exports.createTodo = async (req, res) => {
      const todoapp = new Todo(req.body)
    try {
     
      await todoapp.save()
      res.send(todoapp)
    } catch (error) {
        res.status(401).send("no  task register")
        
    }
}
module.exports.getTodoapp = async (req, res) => {
  try {
    const getTodoapp = await Todo.find({})
    res.status(201).send({
      todoApp:getTodoapp
    })
  } catch (error) {
    
  }

}
module.exports.todoUser = async (req, res) => {
  const{id}= req.params
   try {
     const todoUser = await Todo.findById(id)
     res.status(200).send({todoUser:todoUser})
  } catch (error) {
    
  }
}
module.exports.editTodo = async (req, res) => {
  const update = Object.keys(req.body)
  const allowedupdate = ["name", "description"]
  const isValid = allowedupdate.every((update) => {
    return allowedupdate.includes(update)
  })
  if (!isValid) { 
    res.status(404).send("pls update the name and description of todo task ")
    
  }
  const {id} =req.params
  try {
    const editTodo = await Todo.findById(id)
    update.forEach((update) => {
      editTodo[update] =req.body[update]
    })
    await editTodo.save()
    res.send({editTodo:editTodo})
  } catch (error) {
    res.send("cant update the todo task")
  }
}

module.exports.deletetodo = async (req, res) => {
  const {id} =req.params
  try {
    const deletetodo = await Todo.findByIdAndDelete(id)
    res.send(deletetodo)
  } catch (error) {
    
  }
}
