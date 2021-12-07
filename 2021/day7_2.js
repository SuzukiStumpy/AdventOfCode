"use strict";
debugger;

{
	let input = document.body.textContent
		.split(',')
		.filter( x => x !== '' )
		.map( x => parseInt(x) );
		
	let maxPosition = Math.max(...input);
	let moveList = new Array(maxPosition).fill(0);
	
	for (let i=0; i < maxPosition; i++) {
		for (let j=0; j < input.length; j++) {
			let positionDiff = Math.abs(input[j] - i);
			moveList[i] += (positionDiff * (positionDiff + 1)) / 2;
		}
	}
	
	console.log(`The position which uses the least amount of fuel is ${Math.min(...moveList)}.`);
}