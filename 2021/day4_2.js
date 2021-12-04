{
    "use strict";
    debugger;

    // Input fmt:
    // 1: CSV list of numbers drawn
    // 2: Blank
    // 3-7: Bingo card lines
    // 8: Blank
    // 9...: Repeat lines 3-8 until EOF

    // Read the input first...
    let input = document.body.textContent.split('\n');

    // Get input
    let numbers = input[0].split(',').filter(x => x !== '').map(x => parseInt(x));
    let boards = [];
    let boardIdx = 0;
    let rowIdx = 0;
	let winner = 0;
	let lastIdx = -1;
	let lastWin = -1;
	let lastNum = -1;
	let winners = [];
	
    for (let i = 2; i < input.length; i++) {

        if (input[i] === '') {
            boardIdx += 1;
            rowIdx = 0;
            continue;
        }

        if (!boards[boardIdx]) {
            boards[boardIdx] = [];
        }

        boards[boardIdx][rowIdx] = input[i].split(' ').filter(x => x !== '').map(function(x) { return { marked: false, value: parseInt(x) }});

        rowIdx += 1;
    }

    // Now we should have everything in place, so can solve the problem
	for (let i = 0; i < numbers.length; i++) {
		let currentNum = numbers[i];
		
		// Check each board in sequence...
		for (let boardIdx = 0; boardIdx < boards.length; boardIdx++) {
			let thisBoard = boards[boardIdx];
			// If the board is null, skip it...
			if (thisBoard == null) {
				continue;
			}
			
			// Mark the number.
			for (let rowIdx = 0, thisRow; thisRow = thisBoard[rowIdx]; rowIdx++) {
				let colIdx = thisRow.findIndex( x => x.value === currentNum );
				
				if (colIdx >= 0) {
					thisRow[colIdx].marked = true;
					
					// Now that the number has been marked, see if the board is a winner...
					let winner = checkWin(thisBoard);
					if (winner > 0) {
						// Store the win data... and clear the board.
						lastIdx = boardIdx;
						lastWin = winner;
						lastNum = currentNum;
						winners.push(boards[boardIdx]);
						boards[boardIdx] = null;
					}
					
					//Move to the next board once we've marked the card.
					break;
				}
			}
		}
	}
	
	console.log( `Last board standing!\nBoard: ${lastIdx}, Winning sum: ${lastWin}, Winning number: ${lastNum}. Solution: ${lastWin * lastNum}.`);
}


// Check for a winning ticket...
function checkWin(board) {
	let win = false;
	let rowLength = board[0].length;
	let colLength = board.length;
	
	// Check each row...
	for (let i = 0, row; (row = board[i]) && win === false; i++) {
		win = (row.filter( x => x.marked === true ).length === rowLength);
	}
	
	// Now, check the columns...
	for (let col = 0; (col < board[0].length) && win === false; col++ ) {
		let thisCol = board.map( function(val, idx) { return val[col]; });
		win = (thisCol.filter( x => x.marked === true).length === colLength);
	}
	
	// Return the winning value (or zero if not won)
	if (win === true) {
		return [].concat(...board)
			.filter( x => x.marked === false )
			.reduce( (prev, cur) => cur.value + prev, 0 );
	} else {
		return 0;
	}
}