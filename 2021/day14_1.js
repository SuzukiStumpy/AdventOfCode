"use strict";
debugger;

{
	// Build the initial database
	const instructions = {};
	const MAX_STEPS = 10;
	
	
	let input = document.body.textContent.trim().split('\n');
	let polymer = input[0];
	
	for (let i=2, thisInst; thisInst = input[i]; i++) {
		thisInst = thisInst.split(' -> ');
		instructions[thisInst[0]] = thisInst[1];
	}
	
	// Now we have starting data, iterate and build up the polymer
	for (let i=0; i<MAX_STEPS; i++) {
		let pairs = [];
		let insertions = [];
		
		// Get the pairs...
		for (let j=0; j<polymer.length-1; j++) {
			pairs.push(polymer[j] + polymer[j+1]);	
		}
		
		// For each pair, figure out the insertion.
		for (let j=0, pair; pair = pairs[j]; j++) {
			insertions.push(instructions[pair]);
		}
		
		polymer = '';
		// Now, rebuild the polymer string.
		for (let j=0; j<pairs.length; j++) {
			let pair = pairs[j].split('');
			
			if (polymer == '') {
				polymer += pair[0];
			}
			polymer += insertions[j];
			polymer += pair[1];
		}
	}
	
	let counts = new Array(26).fill(0);
	let base = 'A'.charCodeAt(0);
	
	for (let i=0; i<polymer.length; i++) {
		counts[polymer.charCodeAt(i) - base] += 1;
	}
	
	const mostCommon = counts.filter( x => x !== 0).reduce( (p, c) => Math.max(p, c) );
	const leastCommon = counts.filter( x => x !== 0).reduce( (p, c) => Math.min(p, c) );
	
	console.log(`Final solution: ${mostCommon - leastCommon}.`);
}