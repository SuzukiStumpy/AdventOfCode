"use strict";
debugger;

{
	// Build the initial database
	const instructions = {};
	const MAX_STEPS = 40;
	
	
//	let input = document.body.textContent.trim().split('\n');
let input = [
"NNCB",
"",
"CH -> B",
"HH -> N",
"CB -> H",
"NH -> C",
"HB -> C",
"HC -> B",
"HN -> C",
"NN -> C",
"BH -> H",
"NC -> B",
"NB -> B",
"BN -> B",
"BB -> N",
"BC -> B",
"CC -> N",
"CN -> C"];
	let polymer = input[0];
	
	for (let i=2, thisInst; thisInst = input[i]; i++) {
		thisInst = thisInst.split(' -> ');
		instructions[thisInst[0]] = thisInst[1];
	}
	
	// Naiive solution (part 1) doesn't work here ... order of pairs
	// doesn't matter, just the counts.  so rather than holding
	// everything in memory, just need to count pairs and then iterate...
	
	// Build the initial pairings from the input...
	let pairs = new Map();
	polymer.split('').reduce( (p, c) => {
		pairs.set(p+c, (pairs.get(p+c) ?? 0) + 1);
		return c; 
	});
	
	let letterCounts = new Map();
	
	// Now, iterate...
	for (let i=0; i < MAX_STEPS; i++) {
		let newPairs = new Map();
		
		pairs.forEach( (value, key) => {
			const [first, second] = key.split('');
			const third = instructions[key];
			
			// Get the count for the new pairs from either 'newPairs' or 'pairs' depending
			// on whether we've seen it this iteration or not... Zero if it's never been
			// seen
			const pairCount1 = newPairs.get(first+third) ?? 0;
			const pairCount2 = newPairs.get(third+second) ?? 0;
			
			newPairs.set(first+third, pairCount1 + value);
			newPairs.set(third+second, pairCount2 + value);
			
			// Now add to the letter counts ...
			if (key !== [...pairs.keys()][0]) {
				letterCounts.set(first, (letterCounts.get(first) ?? 0) + value);
			}
			if (key !== [...pairs.keys()].reverse()[0]) {
				letterCounts.set(second, (letterCounts.get(second) ?? 0) + value);
			}
			letterCounts.set(third, (letterCounts.get(third) ?? 0) + value);
		});
			
		pairs = newPairs;
	}
	
	// Now we have the counts of all the pairings, we can reduce them to get the most and least common.
	// We have counts for all pairings so we now need to extract this into individual letter counts...
	let counts = [...letterCounts.values()].sort( (a,b) => a-b);
	
	console.log(`Final solution: ${counts[counts.length-1] - counts[0]}.`);
}