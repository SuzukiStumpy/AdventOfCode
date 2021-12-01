{
    let input = '389125467';
    //let input = '463528179';
    const MAX_MOVES = 10000000;
    const PICKUP = 3;
//debugger
    (function(){
        let cups = input.split('').map( (v) => parseInt(v) );
        let maxVal = cups.reduce( (p, v) => (v > p) ? v : p, 0);

        cups[1000000 - 1] = 0;  // Expand the length of the array.
        let maxIndex = cups.length;
        let currentVal = cups[0];
        // Now fill it...
        for (let i=input.length; i<maxIndex; i++) {
            maxVal += 1;
            cups[i] = maxVal;
        }

        for (let i=0; i<MAX_MOVES; i++) {
            let currentIndex = (i === 0) ? 0 : (cups.indexOf(currentVal) + 1) % maxIndex;
            currentVal = cups[currentIndex];
            let pickup = cups.splice(currentIndex+1, PICKUP);
            if (pickup.length < PICKUP) {
                // We've wrapped around so need to grab the remainder from the beginning of the array
                let t = cups.splice(0, PICKUP - pickup.length);
                pickup.push(t);
                pickup = pickup.flat();
            }
            let destinationVal = currentVal - 1;
            if (destinationVal < 1) destinationVal = 9;
            while (pickup.indexOf(destinationVal) !== -1 ) {
                destinationVal -= 1;
                if (destinationVal < 1) destinationVal = 9;
            }
            let destinationIndex = cups.indexOf(destinationVal);
            cups.splice(destinationIndex+1, 0, pickup);
            cups = cups.flat();

            //console.log(cups.join(','));
        }

        let index_1 = cups.indexOf(1);
        let labels = cups.slice(index_1+1, 2);
        if (labels.length !== 2) {
            labels.push(cups.slice(0, 2 - labels.length));
        }
        labels = labels.flat();

        console.log(`Part 1:  Labels immediately to the right of label 1 are: ${labels[0]} and ${labels[1]}.
Multiplying these together yields ${labels[0] * labels[1]}`);
    })();
}