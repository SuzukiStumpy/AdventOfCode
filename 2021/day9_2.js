"use strict";
debugger;
{
	const input = document.body.textContent.split('\n')
		.filter( x => x !== '' )
		.map( x => x.split('') )
		.map( x => x.map( y => parseInt(y) ) );
	let basinSizes = [];
	const maxY = input.length;
	const maxX = input[0].length;
	
	function basin(r, c, pts) {
		const localVal = input[r][c];
		if (!pts) {
			pts = [];
		}
		if (localVal === 9) {
			return pts;
		}
		if (pts.indexOf(`${r},${c}`) === -1) {
			pts.push(`${r},${c}`);

			// Go left
			if (c > 0 && localVal <= input[r][c-1] ) {
				basin(r, c-1, pts);
			}
			// Go right
			if (c < maxX-1 && localVal <= input[r][c+1] ) {
				basin(r, c+1, pts);
			}
			// Go up
			if (r > 0 && localVal <= input[r-1][c] ) {
				basin(r-1, c, pts);
			}
			// Go down
			if (r < maxY-1 && localVal <= input[r+1][c] ) {
				basin(r+1, c, pts);
			}
		}
		return pts;
	}
	
	
	// Process each row...
	for (let row = 0; row < maxY; row++) {
		for (let col = 0; col < maxX; col++) {
			const basinPoints = basin(row, col);
			if (basinPoints.length > 1) {
				basinSizes.push(basinPoints.length);
			}
		}
	}
	
	// Find the three largest basins...
	let max3 = basinSizes.sort( (a,b) => b-a ).slice(0, 3).reduce( (p, c) => p*c );
	
	// Now, reduce the risks array to a single value for output...
	console.log(`The answer is: ${max3}.`);
}