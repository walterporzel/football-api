const mongoose = require("../connection")

const leagueSchema = new mongoose.Schema({
    strLeague: String,
    strLeagueAlternate: String,
    intFormedYear: String,
    strWebsite: String,
    strDescriptionEN: String
},{ versionKey: false })

module.exports = mongoose.model("League", leagueSchema)