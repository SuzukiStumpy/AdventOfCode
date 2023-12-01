"use strict";
debugger;

{
	// Takes the input (a long string of hex digits) and
	// outputs this converted to a string of binary digits.
	const convertToBinaryString = function(hex) {
		let bin = '';
		
		for (let i=0, c; c = hex[i]; i++) {
			bin += ('0000' + parseInt(c, 16).toString(2)).slice(-4);
		}
		
		return bin;
	}
	
	// Decode a packet from the binary input stream
	const decodePacket = function(bin) {
		let pkt = {};
		
		pkt.version = parseInt(bin.slice(0, 3), 2);
		pkt.type = parseInt(bin.slice(3, 6), 2);
		let idx = 6;
		
		if (pkt.type === 4) {
			// Literal packet
			let num = '';
			let idx = 6; // Starting index for reading from the packet
			
			while (true) {
				const block = bin.slice(idx, idx+5);
				idx += 5;
				num += block.slice(1);
				if (block[0] === '0') break; // Exit the loop after the last digit
			}
			
			pkt.value = parseInt(num, 2);
			while (idx % 4 !== 0) idx++;
		} else {
			// operator packet
			const lengthTypeId = parseInt(bin.slice(idx, 1), 2);
			idx += 1;
			
			let bitField;
			
			if (lengthTypeId === 0) {
				bitField = bin.slice(idx, 15);
				idx += 15;
			} else {
				bitField = bin.slice(idx, 11);
				idx += 11;
			}
			
		}
		
		bin = bin.slice(idx);  // Stip off the processed characters from this packet
		return pkt;
	}
	
	let input = document.body.textContent.trim();
	let binString = convertToBinaryString(input);
	let firstPacket = decodePacket(binString)
	
	console.log(`Input in binary is: ${binString}.`);
}