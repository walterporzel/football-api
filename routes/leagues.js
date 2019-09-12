const express = require("express")
const leaguesRouter = express.Router();

const leaguesController = require("../controllers/leagues");

leaguesRouter.get("/",leaguesController.index);
leaguesRouter.get("/:league",leaguesController.show);
leaguesRouter.post("/",leaguesController.create);
leaguesRouter.put('/:league',leaguesController.update);
leaguesRouter.delete('/:league',leaguesController.destroy);

module.exports = leaguesRouter;