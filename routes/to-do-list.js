const express = require("express");
const router = express.Router();

const todoController = require("../controller/todoController");

router.get("/getTodo", (req, res, next) => {
    res.send('<form method="POST" action="/add"><input name="time"></input><input name="todo"><button type="submit">submit</button></input></form>')

})
router.post("/add", todoController.createitem);

 module.exports = router;