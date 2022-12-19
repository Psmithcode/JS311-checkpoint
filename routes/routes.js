//I'm going to start by adding basic router stuff
let express = require("express");

let router = express.Router();

let controller = require("../controllers/controller");

//next, im going to start developing the routes I am going to need

//this route will make a new grocery list item
router.post("/grocery", controller.createItem);

router.get("/grocery", controller.listItems);

router.get("/grocery/:id", controller.getItem);

router.put("/grocery/:id", controller.updateItem);

router.delete("/grocery/:id", controller.deleteItem);

module.exports = router;
