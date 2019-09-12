const Player = require('./models/Players')
const Team = require('./models/Teams')

const playerJsonData = require('./players.json')
const teamJsonData = require('./teams.json')


Player.find({}).then(playersDB => {
    playersDB.forEach(playerDocument => {
        const playerJson = playerJsonData.find(playerJsonItem => {
            return playerJsonItem.strPlayer === playerDocument.strPlayer;
        })
        Team.findOne({strTeam: playerJson.strTeam})
        .then(teamDocument => {
            playerDocument.strTeam = teamDocument.id;
            playerDocument.save();
        })
    })
})

