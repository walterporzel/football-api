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
},{ toJSON: { virtuals: true } })
teamSchema.virtual('players',{
    ref: 'Player',
    localField: 'strTeam',
    foreignField: 'strTeam'
})

module.exports = mongoose.model("Team", teamSchema)