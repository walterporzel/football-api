const Player = require('./models/Players')
const Team = require('./models/Teams')

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
