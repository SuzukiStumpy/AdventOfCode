use std::env;
use std::fs::File;
use std::io::{BufRead, BufReader};

fn read_file(file_name: &String) -> Vec<String> {
    let f = File::open(file_name).expect("File not found");
    let r = BufReader::new(f);

    r.lines()
        .map(|line| line.unwrap() )
        .collect()
}


fn main() {
    let args: Vec<String> = env::args().collect();
    let fname = &args[1];

    let lines = read_file(&fname);
    let mut ones_count: Vec<i32> = vec![0; lines[0].len()];
    let threshold: i32 = lines.len() as i32 / 2;
    let mut gamma = String::new();
    let mut epsilon = String::new();

    // First, figure out the most commonly occuring digit (just count the ones)
    for line in lines {
        let mut count: usize = 0;
        for c in line.chars() {
            match c {
                '1' => ones_count[count] += 1,
                _ => ()
            }
            count += 1;   
        }
    }

    // Next, build the gamma and epsilon strings
    for i in ones_count {
        if i > threshold {
            gamma.push('1');
            epsilon.push('0');
        } else {
            gamma.push('0');
            epsilon.push('1');
        }
    }

    let gamma_int: i32 = i32::from_str_radix(&gamma, 2).unwrap();
    let epsilon_int = i32::from_str_radix(&epsilon, 2).unwrap();

    println!("Gamma rate is: {} - {}", gamma, gamma_int);
    println!("Epsilon rate is: {} - {}", epsilon, epsilon_int);
    println!("Power consumption (gamma * epsilon): {}", gamma_int * epsilon_int);
}
