const express = require('express');
const playersRouter = express.Router();

const playersController = require("../controllers/players");

playersRouter.get('/',playersController.index);

module.exports = playersRouter;