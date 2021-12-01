{
    let testHand1 = [9, 2, 6, 3, 1];
    let testHand2 = [5, 8, 4, 7, 10];

    let startHand1 = [4, 25, 3, 11, 2, 29, 41, 23, 30, 21, 50, 8, 1, 24, 27, 10, 42, 43, 38, 15, 18, 13, 32, 37, 34];
    let startHand2 = [12, 6, 36, 35, 40, 47, 31, 9, 46, 49, 19, 16, 5, 26, 39, 48, 7, 44, 45, 20, 17, 14, 33, 28, 22];

    function calculateScore(deck) {
        return deck.reduce((p, c, i) => p += c * (deck.length - i), 0);
    }

    function playGame(deck1, deck2) {
        let previousHands = new Set();
        let winner = 0;

        // Now play this game
        while (deck1.length > 0 && deck2.length > 0) {
            // Terminate if infinite game
            if (previousHands.has(deck1.join(',') +' '+ deck2.join(','))) {
                return 1;  // Player 1 automatically wins!
            }

            previousHands.add(deck1.join(',') +' '+ deck2.join(','));

            let deal = [deck1.shift(), deck2.shift()];

            if (deck1.length >= deal[0] && deck2.length >= deal[1]) {
                winner = playGame(deck1.slice(0, deal[0]), deck2.slice(0, deal[1]));
            } else {
                winner = (deal[0] > deal[1]) ? 1 : 2;
            }

            if (winner == 1) {
                deck1.push(deal[0]);
                deck1.push(deal[1]);
            } else {
                deck2.push(deal[1]);
                deck2.push(deal[0]);
            }
        }
        // Return the winner...
        return (deck1.length === 0) ? 2 : 1;
    }

    (function () {
        debugger
        // Play the game
        let hand1 = startHand1.map((v) => v);
        let hand2 = startHand2.map((v) => v);

        while (hand1.length > 0 && hand2.length > 0) {
            let deal = [hand1.shift(), hand2.shift()];
            let winner = (deal[0] > deal[1]) ? 1 : 2;
            deal = deal.sort((a, b) => b - a);

            if (winner == 1) {
                hand1.push(deal[0]);
                hand1.push(deal[1]);
            } else {
                hand2.push(deal[0]);
                hand2.push(deal[1]);
            }
        }

        let winner = (hand1.length == 0) ? 2 : 1;
        let score = calculateScore((hand1.length == 0) ? hand2 : hand1);

        console.log(`Part 1:  The winner is player ${winner} with a final score of ${score}`);

        // Part 2
        hand1 = startHand1.map((v) => v);
        hand2 = startHand2.map((v) => v);

        winner = playGame(hand1, hand2);
        score = calculateScore((hand1.length === 0) ? hand2 : hand1);

        console.log(`Part 2:  The winner is player ${winner} with a final score of ${score}`);
    })();
}