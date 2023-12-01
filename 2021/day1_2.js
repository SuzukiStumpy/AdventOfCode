"use strict";
debugger;

let input = document.body.textContent.split('\n').map( x => parseInt(x) );
input.pop();  // Remove the last element (it's not a number)!
let sums = input.map( (elt, idx, ary) => {
	if (idx <= ary.length - 3) {
		return ary[idx] + ary[idx+1] + ary[idx+2];
	}
});

//Test input   let input = [199,200,208,210,200,207,240,269,260,263];
let depthCount = 0;
sums.reduce( (prev, cur) => { if (cur > prev) depthCount++; return cur; } );
console.log( `Depth increased: ${depthCount} times.` );
