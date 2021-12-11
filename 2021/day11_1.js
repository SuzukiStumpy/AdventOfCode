"use strict";
debugger;

{	
	let input = document.body.textContent
		.trim()
		.split('\n')
		.map( x => x.split('')
					.map(function(y) { return {'value': parseInt(y), 'flashed': false}; })
		);
		
	let flashCount = 0;

	const MAX_STEPS = 100;	
	const MAX_ROW = input.length;
	const MAX_COL = input[0].length;
	
	// Define the recursive function that will process the flashes...
	function doFlashes(coords) {
		// Helper function. Given a cell, processes whether to add to the
		// flash processing list.  Just used to keep the code a little cleaner
		function processFlash(r, c) {
			if (input[r][c].flashed === false) {
				input[r][c].value += 1;
				if (input[r][c].value > 9) {
					coords.push( {'r': r, 'c': c });
				}
			}
		}
			
		while (coords.length > 0) {
			const thisCoord = coords.pop();
			const r = thisCoord.r;
			const c = thisCoord.c;
			
			// Only process if we've not already flashed this cycle...
			if (input[r][c].flashed === false) {
				input[r][c].flashed = true;
				flashCount += 1;
				
				if (r > 0) {
					(c > 0) ? processFlash(r-1, c-1) : null;
					processFlash(r-1, c);
					(c < MAX_COL-1) ? processFlash(r-1, c+1) : null;
				}
				(c > 0) ? processFlash(r, c-1) : null;
				(c < MAX_COL-1) ? processFlash( r, c+1 ) : null;
				if (r < MAX_ROW-1) {
					(c > 0) ? processFlash(r+1, c-1) : null;
					processFlash(r+1, c);
					(c < MAX_COL-1) ? processFlash(r+1, c+1) : null;
				}
			}
		}		
	}
	
	
	for (let step = 0; step < MAX_STEPS; step++) {
		let flashCoords = [];
		
		// Increase each element by 1 first...
		for (let row = 0; row < MAX_ROW; row++) {
			for (let col = 0; col < MAX_COL; col++) {
				input[row][col].value += 1;
				if (input[row][col].value > 9) {
					flashCoords.push( {'r': row, 'c': col} );
				}
			}
		}
		
		// Now, for each element greater than 9, flash.  Then recurse
		doFlashes(flashCoords);
		
		// Finally, reset the flash flag and energy counts
		for (let row = 0; row < MAX_ROW; row++) {
			for (let col = 0; col < MAX_COL; col++) {
				if (input[row][col].flashed === true) {
					input[row][col].value = 0;
					input[row][col].flashed = false;
				}
			}
		}
	}
	
	// Finally output the total number of flashes
	console.log(`The total number of flashes after ${MAX_STEPS} iterations is ${flashCount}.`);
}