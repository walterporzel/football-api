# Football API

## Description

In honor of the 100th season of the National Football League, this API is made up of 3 different databases - football leagues in America, teams in the national football league, and players in the national football league. The players database is realted to the teams database by the strTeam field, with each players team displaying the corresponding team ID, name and abreviation.

All data used is pulled from the [The Sports DB](https://www.thesportsdb.com/api.php)

## Technologies Used

This API was built using Mongo, Mongoose, and Express.js. It was deployed via heroku

## Technical Description

There are 3 different routes out for the main API: /leagues, /teams, and /players. Within each route there is basic CRUD functionality set up:

* Index: All leagues/teams/players can be retrived via the 'get' method
* Show: Individual leagues/teams/players can be retreived via the 'get' method. Lookup teams and leagues by their abreviation, lookup players by their full name
* Create: Leagues/teams/player documents can all be created via the 'post' method.
* Update: Leagues/teams/player documents can all be updated via the 'put' method. Update teams and leagues by their abreviation, lookup players by their full name
* Destroy: Leagues/teams/player documents can all be deleted via the 'destroy' method. Delete teams and leagues by their abreviation, lookup players by their full name

In addition to these routes a player and team can be created simultaniously via the 'players/createWithTeam' route. Please note that if a new player and team are created via this route and they need to be removed, the player and team must each be individually deleted from each database.

Players can additionally be moved from one team another via the 'players/trade/:name/:id' where name is the name of the player to be traded and id is the id number of the team the player is to be traded too.

