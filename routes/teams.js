const express = require('express');
const teamsRouter = express.Router();

const teamsController = require("../controllers/teams");

teamsRouter.get("/",teamsController.index);
teamsRouter.get("/:team",teamsController.show);
teamsRouter.post("/",teamsController.create);
teamsRouter.put('/:team',teamsController.update);
teamsRouter.delete('/:team',teamsController.destroy);

module.exports = teamsRouter;