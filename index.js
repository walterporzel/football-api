const express = require('express')
const app = express();
const parser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

const leaguesRoutes = require('./routes/leagues')
const teamsRoutes = require('./routes/teams')
const playersRoutes = require('./routes/players')

app.use('/leagues', leaguesRoutes);
app.use('/teams', teamsRoutes);
app.use('/players', playersRoutes);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});