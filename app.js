// My Tic Tac Toe App

// REFACTOR GOALS
  // Make the model the one source of truth and display to the DOM based on that
  // Improve column and diagonal checking
  // DRY -- get rid of repeat code
  // Style it up so that it is fun when you win
  // make the new game button more prominent
  // Refactor layout with flexbox
  // Import better xs and os
  // Make the winning xs and os flash
  // make the background loops colors



document.addEventListener("DOMContentLoaded", function(event) {

  var gameOn = true;
  var playerTurn = 'X';
  var board;
  var totalMoves = 0;
  // Make Board Function

  var makeBoard = function() {

    board = [];
    gameOn = true;
    totalMoves = 0;

    for (var i = 0; i < 3; i++) {
      var row = ['','','']
      board.push(row);
    }

    document.getElementById('xwon').style.display = 'none';
    document.getElementById('owon').style.display = 'none';
  }

  // make the board
  makeBoard();

  var xWon = function() {
    document.getElementById('xwon').style.display = 'block';
    gameOn = false;
    console.log('X WON!!');
  }

  var oWon = function() {
    document.getElementById('owon').style.display = 'block';
    gameOn = false;
    console.log('O WON!!');
  }

  var tie = function() {
    document.getElementById('tie').style.display = 'block';
    gameOn = false;
    console.log('TIE')
  }


  // make a check for win function 
  var checkForWin = function() {
    // check each row to see if there are three xs or three os 
    for (var i = 0; i < board.length; i++) {
      var row = board[i];
      var xCount = 0;
      var oCount = 0;
      for (var j = 0; j < row.length; j++) {
        var cell = row[j];
        if (cell === 'X') {
          xCount++;
        }
        if (cell === 'O') {
          oCount++;
        }
      }
      if (xCount === 3) {
        xWon();
        return;
      }
      if (oCount === 3) {
        oWon();
        return;
      }
    }
   
    // CHECK FOR COLUMN WINS
    var colXCounts = [0, 0, 0];
    var colOCounts = [0, 0, 0];

    for (var i = 0; i < board.length; i++) {
      var row = board[i];
      for (var j = 0; j < row.length; j++) {
        var cell = row[j];
        if (cell === 'X') {
          colXCounts[j]++;
        }
        if (cell === 'O') {
          colOCounts[j]++;
        }
      }
    }

    for (var i = 0; i < colXCounts.length; i++) {
      if (colXCounts[i] === 3) {
        xWon();
        return;
      }
      if (colOCounts[i] === 3) {
        oWon();
        return;g
      }
    }


    //CHECK FOR DIAGONAL WINS

    if (board[0][0] === 'X') {
      if (board[1][1] === 'X') {
        if (board[2][2] === 'X') {
          xWon();
          return;
        }
      }
    }

    if (board[2][0] === 'X') {
      if (board[1][1] === 'X') {
        if (board[0][2] === 'X') {
          xWon();
          return;
        }
      }
    }

    if (board[0][0] === 'O') {
      if (board[1][1] === 'O') {
        if (board[2][2] === 'O') {
          oWon();
          return;
        }
      }
    }

    if (board[2][0] === 'O') {
      if (board[1][1] === 'O') {
        if (board[0][2] === 'O') {
          oWon();
          return;
        }
      }
    }

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
    totalMoves++;
    console.log(board);
  }

  var addOToModel = function(classList) {
    var row = classList[1][1] - 1;
    var col = classList[2][1] - 1;
    board[row][col] = 'O';
    totalMoves++;
    console.log(board);
  }

  // Click listener to add x's or o's 
  var cells = document.getElementsByClassName('cell');

  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    cell.addEventListener('click', function(event) {
      if (gameOn) {
        if (event.target.textContent === '') {
          if (playerTurn === 'X') {
            event.target.textContent = 'X';
            var classes = event.target.classList;
            addXToModel(classes);
            switchTurn();
          } else if (playerTurn === 'O') {
            event.target.textContent = 'O';
            var classes = event.target.classList;
            addOToModel(classes);
            switchTurn();
          }
        }
        checkForWin();
        return;
      }
      if (totalMoves === 9) {
        tie();
      }

    });
  }


  var newGameButton = document.getElementsByClassName('new-game-button')[0];
  newGameButton.addEventListener('click', function(event) {
    makeBoard();

    var cells = document.getElementsByClassName('cell');

    for (var i = 0; i < cells.length; i++) {
      cells[i].textContent = '';
    }
  });


  // keep track of how full the board is, if it gets full, invoke a tie game function that displays something

});