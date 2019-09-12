const mongoose = require('../connection');

const playerSchema = new mongoose.Schema({
    strPlayer: String,
    strTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teams"
    },
    dateBorn: String,
    strDescriptionEN: String,
    strPosition: String,
    strHeight: String,
    strWeight: String,
    strThumb: String
})

module.exports = mongoose.model("Players", playerSchema);