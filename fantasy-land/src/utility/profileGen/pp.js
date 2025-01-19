export function generatePlayerImage(canvasId, number, primaryColor, secondaryColor) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const size = canvas.width;

  // Draw background circle
  ctx.fillStyle = primaryColor;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  // Draw jersey number
  ctx.font = `${size * 0.5}px Arial bold`;
  ctx.fillStyle = secondaryColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(number, size / 2, size / 2);
}

// Function to add a player card to the DOM
function addPlayerProfile(container, player) {
  const playerDiv = document.createElement("div");
  playerDiv.className = "player-profile";

  const canvas = document.createElement("canvas");
  canvas.id = `player-${player.number}`;
  canvas.width = 100;
  canvas.height = 100;

  const playerName = document.createElement("div");
  playerName.className = "player-name";
  playerName.textContent = player.name;

  playerDiv.appendChild(canvas);
  playerDiv.appendChild(playerName);
  container.appendChild(playerDiv);

  generatePlayerImage(canvas.id, player.number, player.primaryColor, player.secondaryColor);
}

// Example players
const players = [
  { name: "John Doe", number: "23", primaryColor: "#FF0000", secondaryColor: "#FFFFFF" },
  { name: "Jane Smith", number: "12", primaryColor: "#0000FF", secondaryColor: "#FFFF00" },
  { name: "Alex Johnson", number: "7", primaryColor: "#32CD32", secondaryColor: "#000000" },
];

// Add players to the page
const container = document.getElementById("player-container");
players.forEach(player => addPlayerProfile(container, player));