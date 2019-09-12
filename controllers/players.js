const Player = require("../db/models/Players");

module.exports = {
    index: (req,res) => {
        Player.find({})
        // .populate("strTeam")
        .then(players =>{
            res.json(players);
        })
    }
}