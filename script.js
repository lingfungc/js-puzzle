// Select all the tiles
const tiles = document.querySelectorAll("td");

// Check if a tile has an empty neighbor

// Move the tile
const moveTile = (el) => {
  const emptyTile = document.querySelector(".empty");
  console.log(emptyTile.innerHTML);
  console.log(el.innerHTML);

  emptyTile.innerHTML = el.innerHTML;
  el.innerHTML = "";
  empty.classList.remove("empty");
  el.classList.add("empty");
};

// Add event listener on each tile
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (canMove(tile)) {
      moveTile(tile);
    }
  });
});
