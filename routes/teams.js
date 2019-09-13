const express = require('express');
const teamsRouter = express.Router();

const teamsController = require("../controllers/teams");

// Index: retrieves all teams
teamsRouter.get("/",teamsController.index);

// Show: retrieves a team by abreviation
teamsRouter.get("/:team",teamsController.show);

// Create: creates a new team
teamsRouter.post("/",teamsController.create);

// Update: updates a teams data
teamsRouter.put('/:team',teamsController.update);

// Delete: removes a team document
teamsRouter.delete('/:team',teamsController.destroy);

module.exports = teamsRouter;