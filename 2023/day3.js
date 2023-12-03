"use strict"

function bufferFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: 'utf-8' });
}

const fs = require("fs");
const path = require("path");
const data = bufferFile('./data/day3.txt').split('\n');
// const data = bufferFile('./data/tester.txt').split('\n');
while (data[data.length - 1] === '') data.length -= 1;  // Strip off the empty, final element(s)


//  First Part
function isSymbolAdjacent(data, row, col) {
    const numCols = data[row].length;
    const numRows = data.length;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (row + i < 0 || row + i >= numRows || col + j < 0 || col + j >= numCols) continue;
            if (data[row + i][col + j].match(/[^.0-9]/)) return true;
        }
    }
    return false;
}

function getNumber(data, currentPosition) {
    let theNumber = 0;
    let isAdjacent = false;
    let { row, col } = currentPosition;

    // Early exit if out of bounds
    if (row >= data.length) {
        return [-1, false, currentPosition];
    }

    // Skip unneeded symbols.
    while (col < data[row].length && data[row][col].match(/\D/)) col++;

    // Now we should either be at EOL _or_ at start of number...
    while (col < data[row].length && data[row][col].match(/\d/)) {
        theNumber *= 10;
        theNumber += Number(data[row][col]);
        if (!isAdjacent && isSymbolAdjacent(data, row, col)) isAdjacent = true;
        col += 1;
    }

    if (col >= data[row].length) {
        col = 0;
        row += 1;
    }

    return [theNumber, isAdjacent, { 'row': row, 'col': col }];
}

console.log(`Part 1: ${(() => {
    let sum = 0;
    let number = 0;
    let isAdjacent = false;
    let currentPosition = { 'row': 0, 'col': 0 };

    while (number >= 0) {
        [number, isAdjacent, currentPosition] = getNumber(data, currentPosition);
        if (isAdjacent) sum += number;
    }
    return sum;
})()}`);


// SecondPart
function getNextGear(currentPosition) {
    let { row, col } = currentPosition;

    while (row < data.length && data[row][col] !== '*') {
        col += 1;
        if (col === data[row].length) {
            col = 0;
            row += 1;
        }
    }
    return { 'row': row, 'col': col };
}

function getGearRatios(currentPosition) {
    const map = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    const { row, col } = currentPosition;
    let localData = [...data];
    let ratios = [];

    function extractNumber(row, col) {
        let number = 0;

        // Backtrack to start of number
        while (col > 0 && localData[row][col - 1].match(/\d/)) col -= 1;
        const startIdx = col;

        // Extract number
        while (col < localData[row].length && localData[row][col].match(/\d/)) {
            number *= 10;
            number += Number(localData[row][col]);
            col += 1;
        }

        // Replace the number with periods to prevent us using it again...
        localData[row] = localData[row].slice(0, startIdx) + '.'.repeat(col - startIdx) + localData[row].slice(col);

        return number;
    }

    for (let [rowOffset, colOffset] of map) {
        if (row + rowOffset < 0 || row + rowOffset >= localData.length) continue;
        if (col + colOffset < 0 || col + colOffset >= localData[row + rowOffset].length) continue;

        if (localData[row + rowOffset][col + colOffset].match(/\d/)) {
            ratios.push(extractNumber(row + rowOffset, col + colOffset));
        }
    }
    return (ratios.length == 2) ? ratios : [];
}

console.log(`Part 2: ${(() => {
    let sum = 0;
    let ratios = [];
    let currentPosition = { 'row': 0, 'col': 0 };

    while (currentPosition.row < data.length) {
        currentPosition = getNextGear(currentPosition);
        ratios = getGearRatios(currentPosition);
        sum += ratios.length == 2 ? ratios[0] * ratios[1] : 0;
        currentPosition = { ...currentPosition, 'col': currentPosition.col + 1 };
    }

    return sum;
})()} `);
