"use strict";
debugger;

let input = document.body.textContent.split('\n')
	.filter( x => x !== "" );

function reduceSets(workingset, searchBit, type) {
	let currentBit = 0;

	while (currentBit < input[0].length && workingset.length > 1) {
		let oneCount = workingset.reduce( (prev,cur) => prev += (cur[currentBit] === '1') ? '1' : '', '');
	
		let most = '';
	
		if (oneCount.length >= (workingset.length/2)) {
			most = '1';
		} else {
			most = '0'
		}
	
		if (type === 'M') {
			workingset = workingset.filter( (elt) => elt[currentBit] === most );
		} else {
			workingset = workingset.filter( (elt) => elt[currentBit] !== most );
		}
	
		currentBit += 1;
	}
	
	return workingset[0];
}

let o2 = reduceSets([...input], '1', 'M');
let co2 = reduceSets([...input], '0', 'L');

console.log(`o2 rating: ${o2} (${parseInt(o2,2)}), co2 rating: ${co2} (${parseInt(co2,2)})`);
console.log(`Life support rating: ${parseInt(o2,2) * parseInt(co2,2)}`);