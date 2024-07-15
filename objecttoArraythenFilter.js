let players = {jake:"tired",josh:"energized"};
players.david="energized";
console.log(players);
let playerArr = Object.keys(players);
let filteredPlayers = playerArr.filter(function(energized){
    return players[energized] === "energized";
})
console.log(filteredPlayers);
