"use strict";

let input = document.body.textContent.split('\n').map( x => parseInt(x) );
input.pop();  // Remove the last element (it's not a number)!

let depthCount = 0;
input.reduce( (prev, cur) => { if (cur > prev) depthCount++; return cur; } );
console.log( `Depth increased: ${depthCount} times.` );
