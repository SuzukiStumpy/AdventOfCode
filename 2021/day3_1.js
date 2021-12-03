"use strict";
debugger;

let input = document.body.textContent.split('\n')
	.filter( x => x !== "" );

let threshold = input.length / 2;
let gamma = "";
let exit = false;

while (!exit) {
	let oneCount = input.reduce( (prev, cur) => prev += (cur[cur.length-1] === "1") ? "1" : "", "");
	
	gamma = ((oneCount.length > threshold) ? "1" : "0") + gamma;
	
	input = input.map( x => x.substring(0, x.length-1) );
	exit = input[0].length === 0;
}

// Gamma now exists as a binary string.
// Flip this to get Epsilon
let epsilon = gamma.split('').map(b => (1-b).toString()).join('');

console.log(`In binary form: Gamma: ${gamma}, Epsilon: ${epsilon}.`);

// Now covert to numerics.
gamma = parseInt(gamma, 2);
epsilon = parseInt(epsilon, 2);

console.log(`Gamma: ${gamma}, Epsilon: ${epsilon}.  Power consumption: ${gamma * epsilon}`);