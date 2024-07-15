const players = ["david", "jake", "paul", "patrick", "josh", "ian"];
let availablePlayerIndex = Math.floor(Math.random() * players.length);

// Display the randomly selected player
console.log(players[availablePlayerIndex]);

// Function to filter out even-indexed players
const assignPlayers = players.filter((player, index) => index % 2 === 0);
console.log(assignPlayers);
