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
	let outputs = new Array(data.length);
	
	// Now, filter the inputs for the segment lengths of the unique
	// Digits (don't need to do any decoding for this at the moment
	// since these all have unique segment counts)
	data.forEach( function(e,idx) {
		// Deduce the mappings...
		let mappings = new Array(10);
		
		// Do the obvious ones first...
		mappings[1] = e.input.filter( x => x.length === 2 )[0];
		mappings[4] = e.input.filter( x => x.length === 4 )[0];
		mappings[7] = e.input.filter( x => x.length === 3 )[0];
		mappings[8] = e.input.filter( x => x.length === 7 )[0];
		
		// Now, we can deduce the length 6 elements
		let set2 = e.input.filter( x => x.length === 6 );
		
		// 6 first
		for (let i = 0; i < set2.length; i++) {
			if (set2[i].indexOf(mappings[1][0]) === -1 || set2[i].indexOf(mappings[1][1]) === -1) {
				mappings[6] = set2[i];
				break;
			}
		}
		
		// Now we can  figure out 9 (compare with 4)
		set2 = set2.filter( x => x !== mappings[6] );
		
		for (let i = 0; i < set2.length; i++) {
			let thisArray = set2[i].split('');
			let array4 = mappings[4].split('');
			let difference = thisArray.filter( x => !array4.includes(x) );
			if (difference.join('').length === 2) {
				mappings[9] = set2[i];
				break;
			}
		}
		
		// Anything remaining in set 2 must be zero
		set2 = set2.filter( x => x !== mappings[9]  );
		mappings[0] = (set2.length > 0) ? set2[0] : '';
		
		
		// Now we have the remaining digits (2, 3, 5) - all of which have
		// 5 segments active...
		set2 = e.input.filter( x => x.length === 5 );
		
		// 5 - compare with code for 6 ... should be same apart from one missing segment
		for (let i=0; i < set2.length; i++) {
			let thisArray = set2[i].split('');
			let array6 = mappings[6].split('');
			let difference = array6.filter( x => !thisArray.includes(x) );
			if (difference.join('').length === 1) {
				mappings[5] = set2[i];
				break;
			}
		}

		// Filter out the 5 codes...
		set2 = set2.filter( x => x !== mappings[5] );
		
		// 3 - compare with code for 9 ... should be same apart from one missing segment
		for (let i=0; i < set2.length; i++) {
			let thisArray = set2[i].split('');
			let array9 = mappings[9].split('');
			let difference = array9.filter( x => !thisArray.includes(x) );
			if (difference.join('').length == 1) {
				mappings[3] = set2[i];
				break;
			}
		}
		
		// Filter out the 3 codes...
		set2 = set2.filter( x => x !== mappings[3] );
		
		// Now, the remaining code(s) should map to the 2 digit...
		mappings[2] = (set2.length > 0) ? set2[0] : '';
		
		// Now, sort all the mappings into alphabetical sequence...
		mappings = mappings.map( x => x.split('').sort().join('') );
		
		// .. phew, we've got everything mapped, so we can now produce our valid digits
		outputs[idx] = parseInt(e.output.map( x => mappings.indexOf(x.split('').sort().join('')) ).join(''));
	});

	// Now we can compile the output...
	console.log(`The sum of the outputs is ${outputs.reduce( (p,c) => p+c )}.`);
}