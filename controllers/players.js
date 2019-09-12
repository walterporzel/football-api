const Player = require("../db/models/Players");

module.exports = {
    index: (req,res) => {
        Player.find({})
        // .populate("strTeam")
        .then(players =>{
            res.json(players);
        })
    },
    show: (req,res) => {
        Player.findOne({strPlayer: req.params.player}).then(player =>
            res.json(player));
    },
    create: (req,res) => {
        const newPlayer = req.body;
        Player.create(newPlayer).then(player =>
            res.json(player));
    },
    update: (req,res) => {
        const updatedPlayer = req.body;
        Player.findOneAndUpdate({strPlayer: req.params.player},updatedPlayer, {new: true})
        .then(player => res.json(player));
    },
    destroy: (req,res) => {
        Player.findOneAndDelete({strPlayer: req.params.player})
        .then(player => res.json(player))
    }
}