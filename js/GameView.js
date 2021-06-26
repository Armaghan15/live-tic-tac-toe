class GameView {

  constructor() {
    console.log("INIT GAME VIEW");
  }


  updateBoard(game) {
    this.updateTurn(game);    

    const winningCombination = game.findWinningCombinations();

    console.log(game.board);
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board__tile[data-index='${i}']`);

      tile.classList.remove('tile-winner');


      let classType = game.board[i] == "X" ? "tile-x" : "tile-o";
      tile.innerHTML = `<span class="${classType}">${game.board[i] ? game.board[i] : ""}</span>`;

      if(winningCombination && winningCombination.includes(i)) {
        tile.classList.add("tile-winner")
      }
    }
  }



  updateTurn(game) {    
    let playerX= document.querySelector('.player-x');
    let playerO = document.querySelector('.player-o');
    playerX.classList.remove("active");
    playerO.classList.remove("active");
                
    if (game.turn == 'X') {
        playerX.classList.add('active');
    } else if (game.turn == "O") {
        playerO.classList.add('active');
    }
  } 

}


export default GameView;