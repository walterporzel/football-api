// Seeds all data not related to a different model
const mongoose = require("./connection")
const League = require("./models/Leagues")
const Team = require("./models/Teams")
const Player = require("./models/Players")

const leagueSeedData = require("./leagues.json")
const teamSeedData = require("./teams.json")
const playerSeedData = require("./players.json")

// playerdata array pulls all fields from player json data except team which is seeded in the related models seed file
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

// clears out and seeds each database with non-related data
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




