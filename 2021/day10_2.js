"use strict";
debugger;

{
	// Read and parse the input
	let input = document.body.textContent
		.trim()
		.split('\n');
	
	let openChars = '([{<';
	let closeChars = ')]}>';
	let completionStrings = [];
	
	// Do the work
	input.forEach(function(x) {
		let stack = [];
		let invalidRow = false;
		
		for (let i=0, c; c = x[i]; i++) {
			// If we get an open character, then simply push it on the stack
			if (openChars.indexOf(c) !== -1) {
				stack.push(c);
			// If we get a close character, we need to determine if it's the correct one.
			// If it is, simply pop it off the stack, otherwise the line is in error and
			// we exit the loop
			} else if (closeChars.indexOf(c) !== -1) {
				if (stack.length === 0 || closeChars.indexOf(c) !== openChars.indexOf(stack[stack.length-1])) {
					invalidRow = true;
					break;
				} else {
					stack.pop();
				}
			}
		}
		
		if (!invalidRow) {
			// If we get here, then the line must be valid, but incomplete... so we need to unwind the stack
			// with completion characters [in the correct order] and store this as the completion string.
			let completionString = '';
		
			while (stack.length > 0) {
				const theChar = stack.pop();
				completionString += closeChars[openChars.indexOf(theChar)];
			}
			completionStrings.push(completionString);
		}
	});
	
	// Now that we've got the completion strings, we can score them
	const scores = { ')': 1, ']': 2, '}': 3, '>': 4 };
	let lineScores = [];
	completionStrings.forEach(function(x) {
		let thisScore = 0;
		for (let i = 0; i < x.length; i++) {
			thisScore *= 5;
			thisScore += scores[x[i]];
		}
		lineScores.push(thisScore);
	});
	
	// Sort the scores, then take the middle one
	lineScores.sort( (a,b) => a-b );
	let score = lineScores[Math.floor(lineScores.length / 2)];
	
	// Log the output
	console.log(`The final score is ${score}.`);
}