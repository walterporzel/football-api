const express = require('express');
const playersRouter = express.Router();

const playersController = require("../controllers/players");

// Index: retrives all players
playersRouter.get('/',playersController.index);

// Show: retrieve one player by player name
playersRouter.get("/:player",playersController.show);

// Create: create a new player
playersRouter.post("/",playersController.create);

// Create: create a new player and a new team and then place the player on the newly created team
playersRouter.post("/createWithTeam",playersController.createWithTeam);

// Update: updates a players data
playersRouter.put('/:player',playersController.update);

// Trade player from one team to another
playersRouter.put('/trade/:name/:id',playersController.trade);

// Delete: removes a player document
playersRouter.delete('/:player',playersController.destroy);


module.exports = playersRouter;