const Team = require("../db/models/Teams");

module.exports = {
    index: (req,res) => {
        Team.find({}).then(teams =>{
            res.json(teams);
        })
    },
    show: (req,res) => {
        Team.findOne({strTeamShort: req.params.team}).then(team =>
            res.json(team));
    },
    create: (req,res) => {
        const newTeam = req.body;
        Team.create(newTeam).then(team =>
            res.json(team));
    },
    update: (req,res) => {
        const updatedTeam = req.body;
        Team.findOneAndUpdate({strTeamShort: req.params.team},updatedTeam, {new: true})
        .then(team => res.json(team));
    },
    destroy: (req,res) => {
        Team.findOneAndDelete({strTeamShort: req.params.team})
        .then(team => res.json(team))
    }
}