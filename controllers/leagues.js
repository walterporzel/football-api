const League = require("../db/models/Leagues");

module.exports = {
    index: (req,res) => {
        League.find({}).then(leagues =>{
            res.json(leagues);
        })
    },
    show: (req,res) => {
        League.findOne({strLeagueAlternate: req.params.league}).then(league =>
            res.json(league));
    },
    create: (req,res) => {
        const newLeague = req.body;
        League.create(newLeague).then(league =>
            res.json(league));
    },
    update: (req,res) => {
        const updatedLeague = req.body;
        League.findOneAndUpdate({strLeagueAlternate: req.params.league},updatedLeague, {new: true})
        .then(league => res.json(league));
    },
    destroy: (req,res) => {
        League.findOneAndDelete({strLeagueAlternate: req.params.league})
        .then(league => res.json(league))
    }
}