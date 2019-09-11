const League = require("./models/leagues")

const leagueSeedData = require("./leagues.json")

League.deleteMany({}).then(() => {
    League.create(leagueSeedData).then((leagues) => {
        console.log(leagues);
        process.exit();
    })
})