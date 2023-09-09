//how data is saved in the database
//require our model
//handling of ToDo items
const ToDoModel = require('../models/ToDoModel')
//handles HTTP get requests and retrieves all ToDo items from db using ToDoModel and sends retrieved items as respose
module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body

    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data)
        })
}
module.exports.updateToDo = async( req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err))
}
module.exports.deleteToDo = async( req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndDelete(_id, {text})
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}