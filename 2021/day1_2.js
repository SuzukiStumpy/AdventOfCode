"use strict";

let input = document.body.textContent.split('\n').map( x => parseInt(x) );
input.pop();  // Remove the last element (it's not a number)!
let sums = input.map( (elt, idx, ary) => {
	if (idx <= ary.length - 3) {
		return ary[idx] + ary[idx+1] + ary[idx+2];
	}
});

let depthCount = 0;
sums.reduce( (prev, cur) => { if (cur > prev) depthCount++; return cur; } );
console.log( `Depth increased: ${depthCount} times.` );
