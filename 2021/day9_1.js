"use strict";
debugger;
{
	let input = document.body.textContent.split('\n').filter( x => x !== '' );
	let risks = [];
	let maxY = input.length;
	let maxX = input[0].length;
	
	// Process each row...
	input.forEach( function(x, row) {
		for (let col = 0; col < maxX; col++) {
			let localVal = parseInt(x[col]);
			let surrounds = [];
			
			// Left cell
			if (col > 0) {
				surrounds.push( parseInt(x[col-1]) );
			}
			// Right cell
			if (col < maxX-1) {
				surrounds.push( parseInt(x[col+1]) );
			}
			// Top cell
			if (row > 0) {
				surrounds.push( parseInt(input[row-1][col]) );
			}
			// Bottom cell
			if (row < maxY-1) {
				surrounds.push( parseInt(input[row+1][col]) );
			}
			let isMin = surrounds.reduce( (p, c) => p && (c > localVal), true );
			if (isMin === true) {
				risks.push( 1 + localVal );
			}
		}
	});
	
	// Now, reduce the risks array to a single value for output...
	console.log(`The sum of risk is ${risks.reduce( (p,c) => p+c, 0)}.`);
}