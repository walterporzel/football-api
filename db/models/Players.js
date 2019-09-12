const mongoose = require('../connection');

const playerSchema = new mongoose.Schema({
    strPlayer: String,
    dateBorn: String,
    strDescriptionEN: String,
    strPosition: String,
    strHeight: String,
    strWeight: String,
    strThumb: String,
    strTeam:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }
})

module.exports = mongoose.model("Players", playerSchema);