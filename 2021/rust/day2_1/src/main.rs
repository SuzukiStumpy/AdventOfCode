use std::env;
use std::fs::File;
use std::io::{BufRead, BufReader};

struct Command(&str, i32);

fn load_from_file(file_path :&String) -> Vec<Command> {
    let f = File::open(file_path).expect("File not found");
    let r = BufReader::new(f);

    r.lines()
        .map(|line| {
            let l2 = line.unwrap().split(' '); 
            Command(l2.next().unwrap(), l2.next().unwrap().parse::<i32>().unwrap())
        })
        .collect()
}

struct SubPos {
    horiz: i32,
    depth: i32,
}

fn main() {
    let args: Vec<String> = env::args().collect();
    let fname: &String = &args[1];

    let mut pos = SubPos {
        horiz: 0,
        depth: 0
    };

    let lines = load_from_file(&fname);

    for line in lines {
        let mut l2 = line.split(' ');
        let command = l2.next().unwrap();
        let step = l2.next().unwrap().parse::<i32>().unwrap();

        match command {
            "forward" => pos.horiz += step,
            "down" => pos.depth += step,
            "up" => pos.depth -= step,
            _ => (),
        }
    }

    println!("The final sub position is:\n\tHorizontal: {}\n\tDepth: {}", pos.horiz, pos.depth);
    println!("The final answer required is: {}", (pos.horiz * pos.depth));
}
