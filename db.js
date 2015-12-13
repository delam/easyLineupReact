var RNDBModel = require('react-native-db-models')

var DB = {
  "teams": new RNDBModel.create_db('teams'),
  "games": new RNDBModel.create_db('games'),
  "players": new RNDBModel.create_db('players'),
  "quarters": new RNDBModel.create_db('quarters'),
  "player_quarters": new RNDBModel.create_db('player_quarters'),
}

module.exports = DB

var DBEvents = require('react-native-db-models').DBEvents
DBEvents.on("all", function(){
  console.log("Database changed");
})