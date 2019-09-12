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
    Players: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Players"
    }
})

module.exports = mongoose.model("Team", teamSchema)