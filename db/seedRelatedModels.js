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

// Seed players into Team model
Team.find({}).then(teamsDB => {
    // iterate through each team in the teamsDB
    teamsDB.forEach(teamDocument => {
        // team document is a single team rom the database
        Player.findOne({strTeam: teamDocument._id}).then(playerDocument =>{
            teamDocument.players.push(playerDocument._id)
            teamDocument.save();
        })
    })
})



