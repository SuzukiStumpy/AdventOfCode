{
    //let data = [0, 3, 6];     // Testdata
    let data = [2,20,0,4,1,17];

    //let MAX_ROUNDS = 2020;  // Part 1
    let MAX_ROUNDS = 30000000;  // Part 2
    let lastSeen = Array(MAX_ROUNDS);

    (function part1() {
        debugger
        let lastNumber = data[data.length - 1];
        data.forEach((v, i) => lastSeen[v] = i + 1);    // Prepare the lastSeen array from the test data

        for (let i = data.length; i < MAX_ROUNDS; i++) {
            let nextNumber = (lastSeen[lastNumber]) ? i - lastSeen[lastNumber] : 0;
            lastSeen[lastNumber] = i;
            lastNumber = nextNumber;
        }

        console.log(`The ${MAX_ROUNDS}th number is ${lastNumber}`);
    })();
}