// Select all the tiles
const tiles = document.querySelectorAll("td");

// Check if a tile has an empty neighbor
const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  // console.log(tileColumn);

  const tileRow = tile.parentElement.rowIndex;
  // console.log(tileRow);

  const emptyTile = document.querySelector(".empty");
  // console.log(emptyTile);

  const emptyTileColumn = emptyTile.cellIndex;
  // console.log(emptyTileColumn);

  const emptyTileRow = emptyTile.parentElement.rowIndex;
  // console.log(emptyTileRow);

  // Return true if the selected tile is next to the empty tile
  return (
    (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
    (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
    (tileColumn === emptyTileColumn + 1 && tileRow === emptyTileRow) ||
    (tileColumn === emptyTileColumn - 1 && tileRow === emptyTileRow)
  );
};

// Move the tile
const moveTile = (el) => {
  const emptyTile = document.querySelector(".empty");

  // console.log(emptyTile.outerHTML);
  // console.log(emptyTile.innerHTML);

  // * outerHTML = <td>14</td>
  // console.log(el.outerHTML);
  // * innerHTML = "14"
  // console.log(el.innerHTML);

  emptyTile.innerHTML = el.innerHTML;
  el.innerHTML = "";

  emptyTile.classList.remove("empty");
  el.classList.add("empty");
};

// Check if the user complete the puzzle
const checkTiles = (tiles) => {
  let check = "true";

  console.log(tiles.length);

  for (let index = 0; index < tiles.length - 2; index++) {
    if (tiles[index] !== index + 1) {
      check = "false";
    }
  }
  console.log(check);
};

// Add event listener on each tile
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (canMove(tile)) {
      moveTile(tile);
    }
    checkTiles(tiles);
  });
});
