{
    class Coordinate {
        constructor(x, y, z, w) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        static type = 'Coordinate';

        toString() { return `${Coordinate.type}(${this.x},${this.y},${this.z},${this.w})` };
        get() { return { 'x': this.x, 'y': this.y, 'z': this.z, 'w': this.w } };
    }

    class ActiveCells {
        #active = [];
        #bounds = { lower: new Coordinate(0, 0, 0, 0), upper: new Coordinate(0, 0, 0, 0) };
        constructor(i) {
            if (i && Array.isArray(i)) {
                for (let x = 0; x < i[0].length; x++) {
                    for (let y = 0; y < i.length; y++) {
                        if (i[y].charAt(x) === '#') {
                            this.add(x, y, 0, 0);
                        }
                    }
                }
            }
        }
        static type = 'ActiveCells';

        toString() { return `${ActiveCells.type}(${this.#active.toString()})` };
        get cells() { return this.#active };
        get count() { return this.#active.length };
        get bounds() { return this.#bounds };
        add(x, y, z, w) {
            this.#active.push(new Coordinate(x, y, z, w));
            if (x < this.#bounds.lower.x) this.#bounds.lower.x = x;
            if (x > this.#bounds.upper.x) this.#bounds.upper.x = x;
            if (y < this.#bounds.lower.y) this.#bounds.lower.y = y;
            if (y > this.#bounds.upper.y) this.#bounds.upper.y = y;
            if (z < this.#bounds.lower.z) this.#bounds.lower.z = z;
            if (z > this.#bounds.upper.z) this.#bounds.upper.z = z;
            if (w < this.#bounds.lower.w) this.#bounds.lower.w = w;
            if (w > this.#bounds.upper.w) this.#bounds.upper.w = w;
        };
        isActive(x, y, z, w) { return this.#active.map(v => v.toString()).indexOf(new Coordinate(x, y, z, w).toString()) !== -1 };
        countActiveNeighbours(x, y, z, w) {
            return this.#active.reduce((p, c) =>
                (c.x >= x - 1 && c.x <= x + 1 &&
                    c.y >= y - 1 && c.y <= y + 1 &&
                    c.z >= z - 1 && c.z <= z + 1 &&
                    c.w >= w - 1 && c.w <= w + 1 &&
                    !(c.x === x && c.y === y && c.z === z && c.w === w)) ? p + 1 : p, 0);
        }
    }

    const MAX_ITERATIONS = 6;

    let active = new ActiveCells([
        '#.#.##.#',
        '#.####.#',
        '...##...',
        '#####.##',
        '#....###',
        '##..##..',
        '#..####.',
        '#...#.#.'
    ]);

    let start = Date.now();

    for (let gen = 1; gen <= MAX_ITERATIONS; gen++) {
        let nextGen = new ActiveCells();

        for (let x = active.bounds.lower.x - 1; x <= active.bounds.upper.x + 1; x++) {
            for (let y = active.bounds.lower.y - 1; y <= active.bounds.upper.y + 1; y++) {
                for (let z = active.bounds.lower.z - 1; z <= active.bounds.upper.z + 1; z++) {
                    for (let w = active.bounds.lower.w - 1; w <= active.bounds.upper.w + 1; w++) {
                        let a = active.isActive(x, y, z, w);
                        let n = active.countActiveNeighbours(x, y, z, w);

                        if ((a === true && (n === 2 || n === 3)) || (a === false && n === 3)) {
                            nextGen.add(x, y, z, w);
                        }
                    }
                }
            }
        }

        active = nextGen;
        console.log(`After ${gen} generation${gen === 1 ? '' : 's'}, there are ${nextGen.count} active cells...`);
    }

    let deltaTime = Date.now() - start;
    console.log(`Runtime: ${deltaTime}ms`);
}