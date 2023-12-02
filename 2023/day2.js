"use strict"

function bufferFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: 'utf-8' });
}

const fs = require("fs");
const path = require("path");
const data = bufferFile('./data/day2.txt').split('\n');
while (data[data.length - 1] === '') data.length -= 1;  // Strip off the empty, final element(s)

// Format the data into something sensible we can work with
const mappedDataSets = function mapDataToSets() {
    let retVal = [];
    data.forEach((line) => {
        retVal.push(line.replace('\r', '').slice(line.indexOf(':') + 2).split(';').map((elt) => elt.trim()));
    });
    return retVal;
}();


// Return the maximum number of stones drawn in a single game
function maxDrawPerGame(game) {
    let maxDraw = { 'red': 0, 'green': 0, 'blue': 0 };

    game.forEach((draw) => {
        let stones = draw.split(',').map((elt) => elt.trim());

        stones.forEach((stone) => {
            let [count, colour] = stone.split(' ');
            maxDraw[colour] = Math.max(Number(count), maxDraw[colour]);
        });
    });
    return maxDraw;
}

//  First Part.
console.log(`Part 1: ${(() => {
    const BAG_CONTENTS = { 'red': 12, 'green': 13, 'blue': 14 };
    let gameWinSum = 0;

    function isWinningGame(game) {
        const maxContent = maxDrawPerGame(game);
        return Object.keys(maxContent).reduce((acc, key) => maxContent[key] > BAG_CONTENTS[key] ? false : acc, true);
    }

    mappedDataSets.forEach((game, idx) => {
        if (isWinningGame(game)) {
            gameWinSum += (idx + 1);
        }
    });

    return gameWinSum;
})()}`);


// SecondPart.
console.log(`Part 2: ${(() => {
    let powerSum = 0;

    mappedDataSets.forEach((game, idx) => {
        const minBag = maxDrawPerGame(game);
        powerSum += Object.keys(minBag).reduce((acc, key) => acc * minBag[key], 1);
    });

    return powerSum;
})()} `);
