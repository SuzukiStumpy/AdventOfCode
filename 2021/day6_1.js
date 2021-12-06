"use strict";
debugger;

{
	//let input = [3,4,3,1,2];
	let input = document.body.textContent
		.split(',')
		.filter( x => x !== '' )
		.map( x => parseInt(x) );
	
	const MAXDAYS = 80;
	
	// Run simulation for MAXDAYS days
	for (let i = 0; i < MAXDAYS; i++) {
		// First, see how many new lanternfish we need to breed today
		// (we'll add them at the end of the day)
		let newFish = input.reduce( (prev, cur) => prev + ((cur == 0) ? 1 : 0), 0);
		
		// Now, reduce all existing numbers by 1 and also reset any zeroes to 6 again
		input = input.map( x => (x == 0) ? 6 : x - 1 );
		
		// Finally, add in the new fish...
		let newFishArray = new Array(newFish).fill(8);
		input = input.concat(newFishArray);
	}
	
	let totalCount = input.length;
	
	console.log(`After ${MAXDAYS} days, there are ${totalCount} lanternfish.`);
}