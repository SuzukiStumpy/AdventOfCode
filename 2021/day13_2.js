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
		
	instructionList.forEach( (inst) => {
		inst.hasOwnProperty('x') ? foldLeft(inst.x) : foldUp(inst.y);
	});
	
	// Now, map these into an array so we can print as strings.
	let maxX = pointList.reduce( (p, c) => Math.max(p, c.x), 0);
	let maxY = pointList.reduce( (p, c) => Math.max(p, c.y), 0);
	let final = new Array(maxY+1).fill(' ');
	final.forEach( (x, idx) => { final[idx] = new Array(maxX+1).fill(' '); });
	
	pointList.forEach( (pt) => {
		final[pt.y][pt.x] = '#';
	});
	
	let output = '';
	final.forEach( (x) => output += x.join('') + '\n' );
	console.log(output);
}