const express = require('express');
const playersRouter = express.Router();

const playersController = require("../controllers/players");

playersRouter.get('/',playersController.index);
playersRouter.get("/:player",playersController.show);
playersRouter.post("/",playersController.create);
playersRouter.put('/:player',playersController.update);
playersRouter.delete('/:player',playersController.destroy);
playersRouter.post("/createWithTeam",playersController.createWithTeam);

module.exports = playersRouter;