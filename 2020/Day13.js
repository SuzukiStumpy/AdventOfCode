{
    function getSmallestIndex(a) {
        let smallest = a[0];
        let smallestIdx = 0;

        for (let i=1; i<a.length; i++) {
            if (a[i] < smallest) {
                smallest = a[i];
                smallestIdx = i;
            }
        }
        return smallestIdx;
    }

    (function(){
debugger
        const ARRIVAL_TIME = 1000104;
        let data = "41,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,659,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,x,x,19,x,x,x,x,x,x,x,x,x,29,x,937,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17"
        let departures = data.split(',');
        departures = departures.filter( v => v != 'x' ); // Remove out of service
    
        let earliestTimes = departures.map( v => { 
            let earliest = parseInt(ARRIVAL_TIME / v) * v; 
            return (earliest < ARRIVAL_TIME) ? earliest + parseInt(v) : earliest;
        });

        let idx = getSmallestIndex(earliestTimes);
        let busTime = earliestTimes[idx];
        let waitTime = busTime - ARRIVAL_TIME;

        console.log(`Part 1: You need to wait ${waitTime} minutes for the ${departures[idx]} bus.  Answer is ${waitTime * departures[idx]}`);
debugger
        // Part 2:
        data = data.split(',');
        let time = 100000000000000
        let idx = 0
        let step = 1
        while (idx < data.length) {
            if (data[idx] == 'x') idx++
            else {
                if ((time + idx) % data[idx] == 0) {
                    step *= data[idx]
                    idx++
                } else {
                    time += step
                }
            }
        }

        console.log(`Part 2: earliest congruence: ${time}`);
    })();
}

/*
Sample data:
const ARRIVAL_TIME = 939;
let data = "7,13,x,x,59,x,31,19";

Real data:
const ARRIVAL_TIME = 1000104;
let data = "41,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,659,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,x,x,19,x,x,x,x,x,x,x,x,x,29,x,937,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17";
*/
