use std::env;
use std::fs::File;
use std::io::{BufRead, BufReader};
use std::collections::HashSet;

fn read_file(file_name: &String) -> Vec<String> {
    let f = File::open(file_name).expect("File not found");
    let r = BufReader::new(f);

    r.lines()
        .map(|line| line.unwrap())
        .collect()
}

fn main() {
    let args: Vec<String> = env::args().collect();
    let fname = &args[1];

    let lines = read_file(&fname);
    
    // Generate two sets of input so we can iterate over the data independently
    let mut o2_rating: HashSet<String> = HashSet::from_iter(lines.iter().cloned());
    let mut co2_rating: HashSet<String> = o2_rating.clone();
    
    let mut idx: usize = 0;
    let mut set_length: usize = o2_rating.len();
    
    while set_length > 1 {
        let mut oneCount = 0;
        for element in &o2_rating {
            let mut chars = &element.as_bytes();
            if chars[idx] == '1' as u8 {
                oneCount += 1;
            }
        }
        if one_count > set_length / 2 
        set_length = o2_rating.len();
        idx += 1;
    }
}