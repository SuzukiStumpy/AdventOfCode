"use strict";
debugger;

{
	// Read and parse the input
	let input = document.body.textContent
		.trim()
		.split('\n');
	
	let openChars = '([{<';
	let closeChars = ')]}>';
	let invalidChars = {};
	
	// Do the work
	input.forEach(function(x) {
		let stack = [];
		
		for (let i=0, c; c = x[i]; i++) {
			// If we get an open character, then simply push it on the stack
			if (openChars.indexOf(c) !== -1) {
				stack.push(c);
			// If we get a close character, we need to determine if it's the correct one.
			// If it is, simply pop it off the stack, otherwise the line is in error and
			// we log the invalid closing character and break out of the loop.
			} else if (closeChars.indexOf(c) !== -1) {
				if (stack.length === 0 || closeChars.indexOf(c) !== openChars.indexOf(stack[stack.length-1])) {
					// Invalid close character...
					if (!invalidChars.hasOwnProperty(c)) {
						invalidChars[c] = 1;
					} else {
						invalidChars[c] += 1;
					}
					break;
				} else {
					stack.pop();
				}
			}
		}
	});
	
	// Now that we've processed the invalid characters, we can score them...
	const scores = { ')': 3, ']': 57, '}': 1197, '>': 25137 };
	let score = 0;
	for (const c in invalidChars) {
		score += invalidChars[c] * scores[c];
	}
	
	// Log the output
	console.log(`The final score is ${score}.`);
}