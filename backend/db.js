const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://tavish:todopassword%401@todocluster-0.shl9ljh.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo
}