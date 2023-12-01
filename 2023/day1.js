"use strict"

function bufferFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: 'utf-8' });
}

const fs = require("fs");
const path = require("path");
const data = bufferFile('./data/day1.txt').split('\n');
data.length -= 1;  // Strip off the empty, final element

//  First Part.
console.log(`Part 1: ${(() =>
    data.reduce((acc, line) => {
        const matches = [...line.matchAll(/\d/g)]
            .map(match => Number(match));

        return acc + (10 * matches[0]) + matches[matches.length - 1];
    }, 0))()}`);

// SecondPart.
console.log(`Part 2: ${(() => {
    const digitMap = {
        'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6,
        'seven': 7, 'eight': 8, 'nine': 9,
        '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
    }

    return data.reduce((acc, cur) => {
        const matches = [...cur.matchAll(/(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g)]
            .map(match => digitMap[match[1]]);

        return acc + (10 * matches[0]) + matches[matches.length - 1];
    }, 0);
})()}`);
