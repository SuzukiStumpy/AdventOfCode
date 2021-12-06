"use strict";
debugger;

{
	//let input = [3,4,3,1,2];
	let input = document.body.textContent
		.split(',')
		.filter( x => x !== '' )
		.map( x => parseInt(x) );
	
	const MAXDAYS = 256;
	
	let fishies = new Array(9).fill(0);
	
	// Map the input into the fishies array...
	for (let i = 0; i < fishies.length; i++) {
		fishies[i] = input.reduce( (prev, cur) => prev + ((cur === i) ? 1 : 0), 0);
	}
	
	// Run simulation for MAXDAYS days
	for (let i = 0; i < MAXDAYS; i++) {
		// First, see how many new lanternfish we need to breed today
		// (we'll add them at the end of the day)
		let newFish = fishies[0];
		
		// Reduce all the lifespans
		for (let j = 1; j < fishies.length; j++ ) {
			fishies[j-1] = fishies[j];
		}
		
		// Add in the zeroday fishes
		fishies[6] += newFish;
		
		// And breed new ones
		fishies[8] = newFish;
	}
	
	let totalCount = fishies.reduce( (prev, cur) => prev + cur, 0);
	
	console.log(`After ${MAXDAYS} days, there are ${totalCount} lanternfish.`);
}