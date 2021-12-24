// Brute force.  Inefficient, but who cares...?
"use strict";
debugger;

{
	class ALU {
		constructor() {
			this.reset();
			this.program = [];
		}
		
		reset() {
			this.w = 0;
			this.x = 0;
			this.y = 0;
			this.z = 0;
		}
		
		getVal(reg) {
			if (!this.hasOwnProperty(reg)) throw "ALU Error: No such register";
			return this[reg];
		}
		
		// Instruction set begins here...
		inp(reg) {
			if (!this.hasOwnProperty(reg)) throw "ALU Error: No such register";
			let value = stdIn.shift();
			if (isNaN(parseInt(value))) throw "ALU Error: Non numeric value in INP instruction, or empty stdin";
			this[reg] = parseInt(value);
		}
		
		add( reg, value ) {
			if (!this.hasOwnProperty(reg)) throw "ALU Error: No such register";
			if (this.hasOwnProperty(value)) value = this.getVal(value);
			if (isNaN(parseInt(value))) throw "ALU Error: Non numeric value in ADD instruction";
			this[reg] += parseInt(value);
		}
		
		mul( reg, value ) {
			if (!this.hasOwnProperty(reg)) throw "ALU Error: No such register";
			if (this.hasOwnProperty(value)) value = this.getVal(value);
			if (isNaN(parseInt(value))) throw "ALU Error: Non numeric value in MUL instruction";
			this[reg] *= parseInt(value);
		}
		
		div(reg, value ) {
			if (!this.hasOwnProperty(reg)) throw "ALU Error: No such register";
			if (this.hasOwnProperty(value)) value = this.getVal(value);
			if (isNaN(parseInt(value))) throw "ALU Error: Non numeric value in DIV instruction";
			if (value <= 0) throw "ALU Error: Division by Zero!";
			let tmp = this[reg];
			tmp /= parseInt(value);
			this[reg] = Math.trunc(tmp);
		}
		
		mod( reg, value ) {
			if (!this.hasOwnProperty(reg)) throw "ALU Error: No such register";
			if (this.hasOwnProperty(value)) value = this.getVal(value);
			if (isNaN(parseInt(value))) throw "ALU Error: Non numeric value in MOD instruction";
			if (this[reg] < 0 || parseInt(value) <= 0) throw "ALU Error: Zero modulus error!";
			let tmp = this[reg];
			tmp %= parseInt(value);
			this[reg] = tmp;			
		}
		
		eql( reg, value ) {
			if (!this.hasOwnProperty(reg)) throw "ALU Error: No such register";
			if (this.hasOwnProperty(value)) value = this.getVal(value);
			if (isNaN(parseInt(value))) throw "ALU Error: Non numeric value in EQL instruction";
			this[reg] = (this[reg] == parseInt(value)) ? 1 : 0;
		}
		
		load(program) {
			this.program = program;
		}
		
		run() {
			if (this.program.length == 0) throw "ALU Error: No program!";
			
			for (let i=0; i<this.program.length; i++) {
				const [inst, arg1, arg2] = this.program[i].split(' ');
				
				switch(inst) {
					case 'inp':
						this.inp(arg1);
						break;
					case 'add':
						this.add(arg1, arg2);
						break;
					case 'mul':
						this.mul(arg1, arg2);
						break;
					case 'div':
						this.div(arg1, arg2);
						break;
					case 'mod':
						this.mod(arg1, arg2);
						break;
					case 'eql':
						this.eql(arg1, arg2);
						break;
					default:
						throw "ALU Error:  Unknown instruction.";
						break;
				}
			}
		}
		
		dump() {
			return `ALU Values:\n\tx: ${this.x}\n\ty: ${this.y}\n\tz: ${this.z}\n\tw: ${this.w}\n`;
		}
	}
	
	
	let alu = new ALU();
	alu.load( document.body.textContent.trim().split('\n') );
	let stdIn;
	
	let value = parseInt('9'.repeat(14));
	let found = false;
	let exitVal = parseInt('9'.repeat(13));
	
	while (value > exitVal) {
		if (value % 100 === 0) console.log(`${value}`);
		stdIn = Array.from(String(value), Number);
		alu.reset();
		alu.run();
		if (alu.getVal('z') == 1) {
			found = true;
			break;
		}
		value -= 1;
	}
	
	if (found) {
		console.log( `The maximum valid 14 digit code found is: ${value}.` );
	} else {
		console.log( `No valid solution found.` );
	}
	
}