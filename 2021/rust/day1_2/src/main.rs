use std::fs::File;
use std::io::{BufRead, BufReader};

fn load_from_file(file_path: &str) -> Vec<i32> {
	let f = File::open(file_path).expect("file not found");
	let r = BufReader::new(f);
	
	r.lines()
	 .map(|line| line.unwrap().parse::<i32>().unwrap())
	 .collect()
}

fn main() {
	let path = r"c:\Users\MarkEdwards\Sync\Assorted Code\AdventOfCode\2021\input\day1.txt";
	
	let mut depth_count = 0;
	let data = load_from_file(path);
	
	// Prime the previous value first
    let mut prev = data[0] + data[1] + data[2];
	let len = data.len();
	
	for (pos, _e) in data.iter().enumerate() {
		if pos == len-2 {
			break;
		}
		let cur = data[pos] + data[pos+1] + data[pos+2];
		
		if cur > prev {
			depth_count += 1;
		}
		prev = cur;
	}

	println!("Depth increased {} times.", depth_count);
}
