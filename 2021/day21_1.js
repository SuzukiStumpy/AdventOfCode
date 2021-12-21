"use strict";
debugger;

{
	/// Deterministic dice roller...
	{
		let dieVal = 0;
		var rollDeterministic = function() {
			let ret = (dieVal%100)+1;
			dieVal += 1;
			dieCount += 1;
			return ret;
		}
	}
	
	function move(player, roller) {
		let output = player.player + ' rolls: (';
		
		let moveBy = 0;
		for (let i=0; i<3; i++) {
			let roll = roller();
			output += roll + ((i === 2) ? '' : ',');
			moveBy += roll;
		}
		
		output += ') moves to space ';
		
		player.pos += moveBy;
		
		if (player.pos > 10) {
			player.pos %= 10;
			if (player.pos == 0) {
				player.pos = 10;
			}
		}
		
		output += player. pos;
		
		player.score += player.pos;
		
		output += ' for a total score of '+ player.score;
		console.log(output);
	}
	
	
	let p1 = { 'player': 'P1', 'pos': 6, 'score': 0 };
	let p2 = { 'player': 'P2', 'pos': 4, 'score': 0 };
	let dieCount = 0;
	
	while (true) {
		move(p1, rollDeterministic);
		if (p1.score >= 1000) break;
		move(p2, rollDeterministic);
		if (p2.score >= 1000) break;
	}
	
	let winner = (p1.score >= 1000) ? p1 : p2;
	let loser = (p1.score >= 1000) ? p2 : p1;
	
	console.log(`The winner is ${winner.player}, with a score of ${winner.score}.`);
	console.log(`The die was cast ${dieCount} times.`);
	console.log(`The answer is: ${loser.score * dieCount}`);
}