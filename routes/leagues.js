const express = require("express")
const leaguesRouter = express.Router();

const leaguesController = require("../controllers/leagues");

// Index: retrives all leagues
leaguesRouter.get("/",leaguesController.index);

// Show: retrieve one league by abreviation
leaguesRouter.get("/:league",leaguesController.show);

// Create: create a new league
leaguesRouter.post("/",leaguesController.create);

// Update: Update a leagues data
leaguesRouter.put('/:league',leaguesController.update);

// Deltes: Deletes a league document
leaguesRouter.delete('/:league',leaguesController.destroy);

module.exports = leaguesRouter;