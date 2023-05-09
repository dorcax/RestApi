const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Todo = require("./model/todo")
const todoRoute = require("./router/todo")


const port = process.env.port || 8000

mongoose.connect("mongodb://localhost:27017/HuluApp",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection opened")
})
.catch((err)=>{
    console.log(`oh is error!!!, ${err}`)
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/",todoRoute)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
    
})