"use strict"

function bufferFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: 'utf-8' });
}

const fs = require("fs");
const path = require("path");
const data = bufferFile('./data/day4.txt').split('\n');
// const data = bufferFile('./data/tester.txt').split('\n');
while (data[data.length - 1] === '') data.length -= 1;  // Strip off the empty, final element(s)


// Sanitize data...
let games = [];
data.map((game) => {
    let [_, drawn, played] = game.replace(/\r|\n/, '').split(/[:|]/);
    played = played.replace(/\ +/g, ' ').trim().split(' ').map((elt) => Number(elt));
    drawn = drawn.replace(/\ +/g, ' ').trim().split(' ').map((elt) => Number(elt));
    games.push({ 'copies': 1, 'played': played, 'drawn': drawn });
});


// Part 1
console.log(`Part 1: ${(() => {
    let totalPoints = 0;

    games.forEach((game) => {
        totalPoints += game.played.reduce((acc, cur) => {
            if (game.drawn.includes(cur)) {
                return (acc === 0) ? 1 : acc * 2;
            } else {
                return acc;
            }
        }, 0);
    });

    return totalPoints;
})()}`);


// Part 2
console.log(`Part 2: ${(() => {
    let thisGames = [...games]; // Shadow the global games array so we don't mutate it.
    thisGames.forEach((game, index) => {
        const numMatches = game.played.reduce((acc, cur) => game.drawn.includes(cur) ? acc + 1 : acc, 0);
        for (let i = 0; i < numMatches; i++) {
            thisGames[index + i + 1].copies += thisGames[index].copies;
        }
    });

    return thisGames.reduce((acc, cur) => acc + cur.copies, 0);
})()} `);
