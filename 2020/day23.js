{
    let input = '389125467';
    const MAX_MOVES = 10;
    const PICKUP = 3;
debugger
    (function(){
        let cups = input.split('').map( (v) => parseInt(v) );
        let maxIndex = cups.length;
        let currentVal = cups[0];

        for (let i=0; i<MAX_MOVES; i++) {
            if (i === 0) {
                let currentIndex = (cups.indexOf(currentVal)) % maxIndex;
            } else {
                let currentIndex = (cups.indexOf(currentVal) + 1) % maxIndex;
            }
            let pickup = cups.splice(currentIndex+1, PICKUP);
            let destinationVal = currentVal - 1;
            if (destinationVal < 1) destinationVal = 9;
            while (pickup.indexOf(destinationVal) !== -1 ) {
                destinationVal -= 1;
                if (destinationVal < 1) destinationVal = 9;
            }
            let destinationIndex = cups.indexOf(destinationVal);
            cups.splice(destinationIndex+1, 0, pickup);
            cups = cups.flat();

            console.log(cups.join(','));
        }
    })();
}