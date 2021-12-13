"use strict";
debugger;

{
	let input = document.body.textContent.trim().split('\n');
	let pointList = input.slice(0, input.indexOf(''))
		.map( (x) => {
			let v = x.split(',');
			return { 'x': parseInt(v[0]), 'y': parseInt(v[1])};
		});
	
	
	let instructionList = input.slice(input.indexOf('')+1)
		.map( (x) => { 
			let v = x.replace('fold along ', '');
			v = v.split('=');
			let o = {};
			o[v[0]] = parseInt(v[1]);
			return o;
		});
	
	// Fold the paper by mapping the points over one another...
	function foldLeft(idx) {
		pointList.forEach( (pt) => {
			if (pt.x > idx) {
				pt.x = idx - (pt.x - idx);
			}
		});
	}
	
	function foldUp(idx) {
		pointList.forEach( (pt) => {
			if (pt.y > idx) {
				pt.y = idx - (pt.y - idx);
			}
		});
	}

	// Just do the first fold.
	instructionList[0].hasOwnProperty('x') ? foldLeft(instructionList[0].x) : foldUp(instructionList[0].y);
	
	// Remove the duplicate points
	let dedupe = [...new Map(pointList.map( v => [JSON.stringify([v.x,v.y]), v])).values()]
	
	console.log(`The first fold results in ${dedupe.length} points remaining.`);
}