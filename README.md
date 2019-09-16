# Football API

## Description

In honor of the 100th season of the National Football League, this API is made up of 3 different databases - football leagues in America, teams in the national football league, and players in the national football league. The players database is related to the teams database by the strTeam field, with each players team displaying the corresponding team ID, name and abbreviation.

All data used is pulled from the [The Sports DB](https://www.thesportsdb.com/api.php)

## Technologies Used

The database used in this API was built as a NoSQL database in MongoDB, utilizing the Mongoose ODM library and Express.js web  app framework. It is deployed on the Heroku cloud platform.

## Technical Description

There are 3 different routes out for the main API: /leagues, /teams, and /players. Each route is configured with CRUD functionality:

* Index: All leagues/teams/players can be retrieved via the 'get' method
    * /leagues - retrieves all leagues
    * /teams - retrieves all teams
    * /players - retrieves all players
* Show: Individual leagues/teams/players can be retreived via the 'get' method. Lookup teams and leagues by their abbreviation, lookup players by their full name
    * /leagues/:league - retrieves league by abbreviation
    * /teams/:team - retrieves team by abbreviation
    * /players/:player - retrieves player by full name
* Create: Leagues/teams/player documents can all be created via the 'post' method.
    * /leagues - creates league with information in request body
    * /teams - creates team with information in request body
    * /players - creates player with information in request body
* Update: Leagues/teams/player documents can all be updated via the 'put' method. Update teams and leagues by their abbreviation, lookup players by their full name
    * /leagues/:league - updates specified league with information in the request body
    * /teams/:team - updates specified team with information in the request body
    * /players/:player - updates specified player with information in the request body
* Destroy: Leagues/teams/player documents can all be deleted via the 'destroy' method. Delete teams and leagues by their abbreviation, lookup players by their full name
    * /leagues/:league - removes league by abbreviation
    * /teams/:team - removes team by abbreviation
    * /players/:player - removes player by full name

In addition to these routes a player and team can be created simultaneously via the 'players/createWithTeam' route. Please note that if a new player and team are created via this route and they need to be removed, the player and team must each be individually deleted from each database.

Players can additionally be moved from one team another via the 'players/trade/:name/:id' where name is the name of the player to be traded and id is the id of the team the player is to be traded too.

