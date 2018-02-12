// My Tic Tac Toe App

// Should be a source of truth for the tic tac toe game
// basically an array of arrays 
// each time there is a change, the app should update the model and rerender everything

// FUNCITONALITY
// When page opens, allow user to click on a div to place an x in there
// computer responds with an 0 in a random remaining spot
// game then waits for the user to put a new x in there
// when one of the players wins or ties - print out a result to the page 
// when new game is hit, the everything resets to blank 

// make an array of arrays to hold all the information



document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM loaded')

  var playerTurn = 'X';

  var board = [];

  for (var i = 0; i < 3; i++) {
    var row = ['','','']
    board.push(row);
  }

  // Helper to switch the player turn
  var switchTurn = function() {
    if (playerTurn === 'X') {
      playerTurn = 'O';
      return;
    }
    if (playerTurn === 'O') {
      playerTurn = 'X';
      return;
    }
  };

  // Helper to Add X to the correct spot in the model
  var addXToModel = function(classList) {
    var row = classList[1][1] - 1;
    var col = classList[2][1] - 1;
    board[row][col] = 'X'
    console.log(board);
  }

  var addOToModel = function(classList) {
    var row = classList[1][1] - 1;
    var col = classList[2][1] - 1;
    board[row][col] = 'O'
    console.log(board);
  }

  // Click listener to add x's 
  var cells = document.getElementsByClassName('cell');

  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    cell.addEventListener('click', function(event) {

      if (playerTurn === 'X') {
        event.target.textContent = 'X';
        var classes = event.target.classList;
        addXToModel(classes);
        switchTurn();
        return;
      }

      if (playerTurn === 'O') {
        event.target.textContent = 'O';
        var classes = event.target.classList;
        addOToModel(classes);
        switchTurn();
        return;
      }

    });
  }

});