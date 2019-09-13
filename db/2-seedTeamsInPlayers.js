// Seeds team data in the 'strTeam' feild of the player model
const Player = require('./models/Players')
const Team = require('./models/Teams')

const playerJsonData = require('./players.json')

// Seeds team ID into player model
Player.find({}).then(playersDB => {
    // iterates through each player in playersDB
    playersDB.forEach(playerDocument => {
        // player document is a single player from the database
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



