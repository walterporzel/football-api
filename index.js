const express = require('express')
const app = express();
const parser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});