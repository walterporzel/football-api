// Both models are required for the create with team method
const Player = require("../db/models/Players");
const Team = require('../db/models/Teams');

module.exports = {
    index: (req,res) => {
        Player.find({})
        // populates players teams in output, pulling forward only the team name and abreviation
        .populate("strTeam","strTeam strTeamShort")
        .then(players =>{
            res.json(players);
        })
    },
    show: (req,res) => {
        Player.findOne({strPlayer: req.params.player})
        // populates players teams in output, pulling forward only the team name and abreviation
        .populate("strTeam","strTeam strTeamShort")
        .then(player =>
            res.json(player));
    },
    create: (req,res) => {
        const newPlayer = req.body;
        Player.create(newPlayer).then(player =>
            res.json(player));
    },
    // This enables a player and team to be created at the same time, with the player beeing created on a team
    createWithTeam: (req,res) => {
        const newTeam = req.body.team
        const newPLayer = req.body.player

        Player.create(newPLayer).then(player => {
            Team.create(newTeam).then(team => {

                console.log(team._id)

                player.strTeam = team._id
                player.save();

                res.json(player)
            })
        })

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