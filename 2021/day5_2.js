"use strict";
debugger;

{
	let input = document.body.textContent.split('\n')
		.filter( x => x !== '' )
		.map( function(x) {
			let pts = x.match(/^(.*) -> (.*)$/);
			let p1 = pts[1].split(',').map( a => parseInt(a) );
			let p2 = pts[2].split(',').map( a => parseInt(a) );
			return { 'p1': [...p1], 'p2': [...p2] };
		});
	
	const MAPSIZE = input.reduce( (prev, cur) => Math.max(prev, cur.p1[0], cur.p1[1], cur.p2[0], cur.p2[1]), 0);
	let map = makeMap(MAPSIZE+1);
	
	
	// Plot the lines onto the map...
	for (let i = 0, line; line = input[i]; i++) {
		mapPoints(line.p1[0], line.p1[1], line.p2[0], line.p2[1], map);
	}
	
	// Now determine the points where more than two lines overlap and count them...
	let dangerPoints = 0;
	
	for (let i=0, row; row = map[i]; i++) {
		let pCount = row.reduce( (prev, cur) => (cur >= 2) ? prev+1 : prev, 0);
		dangerPoints += pCount;
	}
	
	console.log(`We have detected ${dangerPoints} dangerous points.`);
		
	
	
	// Uses Bresenhem's Line algorithm to plot points into the map...
	function mapPoints(x0, y0, x1, y1, map) {
		let dx = Math.abs(x1 - x0);
		let sx = x0 < x1 ? 1 : -1;
		let dy = -(Math.abs(y1 - y0));
		let sy = y0 < y1 ? 1 : -1;
		let err = dx + dy;
		
		while (true) {
			map[x0][y0] += 1;
			
			if (x0 == x1 && y0 == y1) break;
			let e2 = 2 * err;
			if (e2 >= dy) {
				err += dy;
				x0 += sx;
			}
			if (e2 <= dx) {
				err += dx;
				y0 += sy;
			}
		}
	}
	
	function makeMap(size) {
		let m = new Array(size);
		
		for (let i=0; i<size; i++) {
			m[i] = new Array(size).fill(0);
		}
		
		return m;
	}
}