const League = require("./models/leagues")
const Team = require("./models/teams")

const leagueSeedData = require("./leagues.json")
const teamSeedData = require("./teams.json")

League.deleteMany({}).then(() => {
    League.create(leagueSeedData).then((leagues) => {
        console.log(leagues);
        process.exit();
    })
})

Team.deleteMany({}).then(() => {
    Team.create(teamSeedData).then((teams) => {
        console.log(teams);
        process.exit();
    })
})