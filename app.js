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

  // player turn starts as x
  // if player o wins, set player turn to o

  // Initialized game state
  var gameOn = true;
  var playerTurn = 'X';
  var board;
  var totalMoves = 0;
  var lastWinner;
  var xWins = 0;
  var oWins = 0;

  // Make Render function that takes a board and renders it to the Dom


  // Function to make the board
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

  // Make the Board
  makeBoard();

  // End of Game Functions
  var xWon = function() {
    document.getElementById('xwon').style.display = 'block';
    xWins++;
    lastWinner = 'X';
    gameOn = false;
    document.getElementById('xWins').textContent = `X Wins: ${xWins}`;
    console.log('X WON!!');
  }
  var oWon = function() {
    document.getElementById('owon').style.display = 'block';
    oWins++;
    lastWinner = 'O';
    gameOn = false;
    document.getElementById('oWins').textContent = `O Wins: ${oWins}`;
    console.log('O WON!!');
  }
  var tie = function() {
    document.getElementById('tie').style.display = 'block';
    gameOn = false;
    console.log('TIE')
  }

  // Check for Win Logic
  var checkForWin = function() {

    var checkForRowsWin = function() {
      var checkRow = function(player, row) {
        for (var j = 0; j < row.length; j++) {
          var cell = row[j];
          if (cell !== player) {
            return false;
          }
        }
        return true;
      }

      for (var i = 0; i < board.length; i++) {
        var row = board[i];
        if (checkRow('X', row)) {
          xWon();
        }
        if (checkRow('O', row)) {
          oWon();
        }
      }
    }

    var checkForColumnsWin = function() {
      var checkColumn = function (player, column) {
        if (board[0][column] === player) {
          if (board[1][column] === player) {
            if (board[2][column] === player) {
              return true;
            }
          }
        }
      }

      for (var i = 0; i < 3; i++) {
        if (checkColumn('X', i)) {
          xWon();
        }
        if (checkColumn('O', i)) {
          oWon();
        }
      }
    }

    //CHECK FOR DIAGONAL WIN
    var checkForDiagonalsWin = function() {

      var checkMajorDiagonal = function(player) {
        if (board[0][0] === player) {
          if (board[1][1] === player) {
            if (board[2][2] === player) {
              return true;
            }
          }
        }
        return false;
      }

      var checkMinorDiagonal = function(player) {
        if (board[2][0] === player) {
          if (board[1][1] === player) {
            if (board[0][2] === player) {
              return true;
            }
          }
        }
        return false;
      }

      if (checkMajorDiagonal('X')) {
        xWon();
        return;
      } 
      if (checkMajorDiagonal('O')) {
        oWon();
        return;
      }
      if (checkMinorDiagonal('X')) {
        xWon();
        return;
      }
      if (checkMinorDiagonal('O')) {
        oWon();
        return;
      }
    }
    checkForRowsWin();
    checkForColumnsWin();
    checkForDiagonalsWin(); 
  }
  
  // Function to switch player turn
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

  // Model Updaters
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

  // Event Listener
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

  // Game Reset Functionality
  var newGameButton = document.getElementsByClassName('new-game-button')[0];
  newGameButton.addEventListener('click', function(event) {
    makeBoard();

    var cells = document.getElementsByClassName('cell');

    for (var i = 0; i < cells.length; i++) {
      cells[i].textContent = '';
    }

    if (lastWinner !== undefined) {
      playerTurn = lastWinner;
    }
  });

});