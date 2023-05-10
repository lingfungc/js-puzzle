// Select all the tiles
const tiles = document.querySelectorAll("td");

// Check if a tile has an empty neighbor

// Move the tile

// Add event listener on each tile
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (canMove(tile)) {
      moveTile(tile);
    }
  });
});
