const mongoose = require("../connection")

const teamSchema = new mongoose.Schema({
    strTeam: String,
    strTeamShort: String,
    strManager: String,
    strStadium: String,
    strStadiumLocation: String,
    intStadiumCapacity: String,
    strWebsite: String,
    strDescriptionEN: String,
    players:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }]
})
module.exports = mongoose.model("Team", teamSchema)