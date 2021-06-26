import Game from "./Game.js";
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();
// gameView.updateBoard(game)



document.querySelector(".restart").addEventListener("click", () => {
  onRestartClick();
})


let tiles = document.querySelectorAll(".board__tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  })
})



const onTileClick = (index) => {
  // make a move
  // change turn
  // update board
  game.makeMove(index);
  gameView.updateBoard(game);
}




const onRestartClick = () => {
  game = new Game();
  gameView.updateBoard(game)
}


gameView.updateBoard(game);