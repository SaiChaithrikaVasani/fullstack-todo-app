const {Router} = require("express");//router obj allows to define routes
const { getToDo, saveToDo , updateToDo, deleteToDo} = require("../controllers/ToDoController");

const router = Router()//invokes router constructor
router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)
module.exports = router;