use std::fs::File;
use std::io::{BufRead, BufReader};

fn main() {
	let path = r"c:\Users\MarkEdwards\Sync\Assorted Code\AdventOfCode\2021\input\day1.txt";
	
	let mut depth_count = 0;
	let mut prev = 0;
	
	let file = File::open(path).unwrap();
	let reader = BufReader::new(file);
	
	for (index, line) in reader.lines().enumerate() {
		let line = line.unwrap();
		let cur = line.parse::<i32>().unwrap();
		
		if index > 0 && cur > prev {
			depth_count += 1;
		}
				
		prev = cur;
	}

	println!("Depth increased {} times.", depth_count);
}
