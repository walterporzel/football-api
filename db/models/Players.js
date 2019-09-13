const mongoose = require('../connection');

const playerSchema = new mongoose.Schema({
    strPlayer: String,
    dateBorn: String,
    strDescriptionEN: String,
    strPosition: String,
    strHeight: String,
    strWeight: String,
    strThumb: String,
    // references the team model to determine the team associated with a given player
    strTeam:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }
})

module.exports = mongoose.model("Players", playerSchema);