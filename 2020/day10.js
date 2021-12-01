{
    var data = [
        99,
        104,
        120,
        108,
        67,
        136,
        80,
        44,
        129,
        113,
        158,
        157,
        89,
        60,
        138,
        63,
        35,
        57,
        61,
        153,
        116,
        54,
        7,
        22,
        133,
        130,
        5,
        72,
        2,
        28,
        131,
        123,
        55,
        145,
        151,
        42,
        98,
        34,
        140,
        146,
        100,
        79,
        117,
        154,
        9,
        83,
        132,
        45,
        43,
        107,
        91,
        163,
        86,
        115,
        39,
        76,
        36,
        82,
        162,
        6,
        27,
        101,
        150,
        30,
        110,
        139,
        109,
        1,
        64,
        56,
        161,
        92,
        62,
        69,
        144,
        21,
        147,
        12,
        114,
        18,
        137,
        75,
        164,
        33,
        152,
        23,
        68,
        51,
        8,
        95,
        90,
        48,
        29,
        26,
        165,
        81,
        13,
        126,
        14,
        143,
        15
    ];

    /* var data = [
        16,
        10,
        15,
        5,
        1,
        11,
        7,
        19,
        6,
        12,
        4
    ];*/

    /* var data = [
        28,
        33,
        18,
        42,
        31,
        14,
        46,
        20,
        48,
        47,
        24,
        23,
        49,
        45,
        19,
        38,
        39,
        11,
        1,
        32,
        25,
        35,
        8,
        17,
        7,
        9,
        4,
        2,
        34,
        10,
        3
    ]; */

    (function () {
        var maxJ = data.reduce((a, c) => (c > a) ? c : a) + 3;

        var sortedList = data.sort((a, b) => a - b);
        var differences = data.map((v, i, a) => (i === 0) ? v : v - a[i - 1]);

        var oneJoltCount = differences.reduce((a, c) => (c === 1) ? a += 1 : a);
        var threeJoltCount = differences.reduce((a, c) => (c === 3) ? a += 1 : a);

        console.log(`Max Joltage: ${maxJ}`);
        console.log(`Adapter list: ${sortedList}`);
        console.log(`Difference distribution: ${differences}`);
        console.log(`There are ${oneJoltCount} one Jolt differences and ${threeJoltCount} three Jolt differences`);
        console.log(`Part 1:  Number of 1 jolt differences * 1 jolt differences == ${oneJoltCount * threeJoltCount}`);

        /* Doesn't work  runs in O(n2^n) time so for larger inputs won't complete in a reasonable timeframe...
                // generates all array subsets
                function* subsets(array, offset = 0) {
                    while (offset < array.length) {
                        let first = array[offset++];
                        for (let subset of subsets(array, offset)) {
                            subset.push(first);
                            yield subset;
                        }
                    }
                    yield [];
                }
        debugger
                var validCount = 0;
                for (let subset of subsets(sortedList)) {
                    subset = subset.sort( (a, b) => a - b);
                    // Subset is only potentially valid if the last value is maxJ - 3, so can instantly discard before tracing the difference map
                    if (subset[subset.length - 1] === maxJ - 3) {
                        differences = subset.map((v, i, a) => (i === 0) ? v : v - a[i - 1]);
                        if (differences.reduce( ((a, c) => (c > 3) ? a += 1 : a ), 0) === 0) {  // If there's no differences greater than 3 in the list, we should be valid
                            validCount += 1;
                        }
                    }
                }
        
                console.log(`Part 2:  Number of valid combinations of adapters == ${validCount}`);
        */

        // Modify data with the start and end values for device and socket
        sortedList.push(maxJ);
        sortedList.unshift(0);

        // Now, we want to determine the number of ways to get from the current element to a new valid element
        // As we work up the list, the number of ways of getting from a to b multiplies up the traversals..
        // .. so by the time we've finished, we should be able to get the total number of valid combinations
        // from the last entry in the traversals list...
        var countOfTraversals = new Array(sortedList.length).fill(0);
        countOfTraversals[0] = 1;

        for (var i = 0; i < sortedList.length; i++) {
            for (var j = i + 1; j < sortedList.length; j++) {
                if (sortedList[j] - sortedList[i] > 3) break;
                countOfTraversals[j] += countOfTraversals[i];
            }
        }

        console.log(`Part 2:  There are ${countOfTraversals[countOfTraversals.length - 1]} ways of combining your bag of adapters`);
    })();
}