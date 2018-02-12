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

  var board = [];

  for (var i = 0; i < 3; i++) {
    var row = ['','','']
    board.push(row);
  }

  // need a helper function that takes the class name of a cell
  // identifies the correct cell on the board
  // and adds an x in there

  var addXToModel = function(classList) {
    
  }

  // Click listener to add x's 
  var cells = document.getElementsByClassName('cell');

  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    cell.addEventListener('click', function(event) {
      event.target.textContent = 'X';
      console.log(event.target.classList);

    });
  }

});