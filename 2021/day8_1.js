"use strict";
debugger;

{
	// Read the input into a format we can use.
	// [array of objects containing 'input' and 'output' arrays of segments]
	let data = document.body.textContent
		.split('\n')
		.filter( x => x !== '' )
		.map( function(x) {
			let d = x.split(' | ');
			let i = d[0].split(' ');
			let o = d[1].split(' ');
			return {'input': i, 'output': o};
		});

	// Counter for each time a digit appears
	let digitCounts = new Array(10).fill(0);
	
	// Now, filter the inputs for the segment lengths of the unique
	// Digits (don't need to do any decoding for this at the moment
	// since these all have unique segment counts)
	data.forEach( function(e) {
		e.output.forEach( function(e) {
			let len = e.length;
			switch (len) {
				case 2: digitCounts[1] += 1; break;
				case 3: digitCounts[7] += 1; break;
				case 4: digitCounts[4] += 1; break;
				case 7: digitCounts[8] += 1; break;
			}
		});
	});

	
	// Finally output the data...
	console.log(`Digit 1 appears ${digitCounts[1]} times.`);
	console.log(`Digit 4 appears ${digitCounts[4]} times.`);
	console.log(`Digit 7 appears ${digitCounts[7]} times.`);
	console.log(`Digit 8 appears ${digitCounts[8]} times.`);
	console.log(`Total number of unique digits is ${digitCounts.reduce( (p, c) => p+c )}.`);
}