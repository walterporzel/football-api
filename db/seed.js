const mongoose = require("./connection")
const League = require("./models/Leagues")
const Team = require("./models/Teams")
const Player = require("./models/Players")

const leagueSeedData = require("./leagues.json")
const teamSeedData = require("./teams.json")
const playerSeedData = require("./players.json")

const playerRawData = playerSeedData.map(playerJson => {
    const playerData = {}

    playerData.strPlayer = playerJson.strPlayer;
    playerData.dateBorn = playerJson.dateBorn;
    playerData.strDescriptionEN = playerJson.strDescriptionEN;
    playerData.strPosition = playerJson.strPosition;
    playerData.strHeight = playerJson.strHeight;
    playerData.strWeight = playerJson.strWeight;
    playerData.strThumb = playerJson.strThumb;

    return playerData
})

League.deleteMany({}).then(() => {
    League.create(leagueSeedData).then((leagues) => {
        console.log(leagues);
    })
})

Team.deleteMany({}).then(() => {
    Team.create(teamSeedData).then((teams) => {
        console.log(teams);
    })
})

Player.deleteMany({})
    .then(() => {
        Player.create(playerRawData)
            .then(players => console.log(players))
});




