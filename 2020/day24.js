{
    // Sample input ... real input much larger...
    let input = [
        'nwwwwwsewewwwwsenwwnewwwnw',
        'nwnwnwesenwnwnwnenwnwsesewwnwnenwnwnwnw',
        'eeeeenwnwesesweeeew',
        'newswseswseeswneseeseseswsesesesenewse',
        'nweeeswnwseeseeeeeeewneseeene',
        'nwnwnwnwnwsewnwneewnwwwsewwwnwsw',
        'nwsesenwnenwwewwwneseswsewswwwwww',
        'wsenwswsesewswseswseseenesesenweseswnesw',
        'nenenenenwneweneneswwnenenenesenenesese',
        'nenwnenenesenenenenene',
        'neneswnenenwnwnwnwnenwnenwenene',
        'wswnwswswseswswseswnwswswsweseseswswnesw',
        'seneeseseswnewseseseseneswneseseseseseew',
        'swneeenesweswswnenwnwnweneneswesew',
        'nwswewewwwewwnewwseswww',
        'nwnwswnwswsesewneswwseeeeneweswew',
        'nwsweeeswsweeneeswnenwneeswene',
        'swnwseswswnwswswswneswneswweswwswwwswse',
        'nwnwenenwneswnwneswnwnwnewsenwnesenwne',
        'neneswswswnwesenwwnewneweeenweswnenw',
        'wnwnwwnwnwnwnwseneswseswnwnenw',
        'newnenweneseewsewswsewseneswneswwsw',
        'nenenwwnenwnwsenwnenwsenewnwseenenene',
        'senwweswswswneswswsweswwswswswswswswsw',
        'nesenwswsesewneeswesew',
        'nenenenenenewneneneesewneneene',
        'nwenwswnenenwneneneswwenwnenenwneenew',
        'neeneswwnenenenenesenenene',
        'nesweenenenweeeseeweweneenenese',
        'nwnwnwnwnwnenwswnwnw',
        'ewwnesweseseeswwnwseseneeswswwnwsw',
        'wnwwsewsewwwwwwswwenwewnwnw',
        'wneneseswnwnenesweseeeswnenenenwnew',
        'wesweenwwneswnwsweeeeenwsweee',
        'nesewnwnwnwsenwnenwwnwswwnwnwnwwwnw',
        'eneeeeenwsweeee',
        'nwneneneswnwnwneseenenenesewnenwnwnene',
        'seswsewseseseneeseseenwswseneesesesew',
        'seeesesewseseewseesene',
        'nenenenwseneswnenenenenenenenwswnese',
        'enwswwswnweswswwswwwneswesewnweesw',
        'nenenwnwnenenesenwenwnenewsenesenwswnwne',
        'nwnesenewnenenenenenenenenwnenwsenese',
        'eeswneeeweenwenwsweweseenewne',
        'nwwnewnwswsenwnewswsewswnewe',
        'wseneewwsenwnenewwneseeneseeee',
        'eseneseseswneesewnesewesesesesesese',
        'swneneeneeswneneswswneneneeneswenenwe',
        'swswswswswswswswsweseswswneswswnwnwese',
        'senenwewnwswnenwsenenwneswnwnwnwnwnwnwnw',
        'sweesweeenwsenenewneeeneenwene',
        'sesweswseseswswswneswnwwsweswseswnwswwne',
        'newwswseewnewneneseswsewnwsewwwnwsw',
        'swwwewnwswswswsesenwswwneseneswswswsw',
        'eswseswseswneneseswwseseswnwswseseseswwse',
        'swnwenwnwnwewnewsewswnwwswsewneswnwnw',
        'eeeenweeneswweseneeeeesenwe',
        'nwsenwswseseseseseswsesweseseswsenwsese',
        'wneesesenwnwswswwwwesenwseeneseneesw',
        'senwneneswwnesewwnwneeneenesenwnenenwne',
        'nenenwnwwswnenenenenwnenenesenenwwsenw',
        'nwwnwswnwenwwwnwenwnesenw',
        'nwnwnwnwwsenenwwsenwswswnenenwnenwe',
        'nwswnwnenwneenenenwnwswnwsenwnwnwnenwnwe',
        'swnwnwsenwnwwwswnwwwenwwenenenwswnw',
        'wwnesewswswswswseswnwnwwneswwwswswe',
        'swwenenesenewnesenewenw',
        'swwswsewnwwswswenwneeeswswswswnwnwswe',
        'senwnwnenwsenwnewwwsenwnwsesenenenwnwnenw',
        'swswnesenwwnwnweswnwnweeneneenenwwnw',
        'seswwswwswwneswsw',
        'eseweeseeseneweeeseweeenese',
        'eneewwseseeeneeeeewsweenesee',
        'nwsweenwswneewweswswseswnwsesenene',
        'wswswwneseswwnwswwswnewwwwnwwese',
        'wsweeneenwnweswneswneseseewneee',
        'eneseseseswseseesesesese',
        'nwnwwnwnewnwnwsenwseseeneswswnenwsenw',
        'seswswswseneswswsesewwswnwnwswsesenesene',
        'swsweswswswwswswswswenwswswsw',
        'swwnewwswswnwwswswswwswswswnwsweswe',
        'wneseneenwswnenwsewnesenwsweenwwnw',
        'eewneswseesweeweswesenwnwnewne',
        'weneeneesesweenenwnweesw',
        'nwneeneneneneneweneenewseeneneswe',
        'swswsenenwseswseswnwswse',
        'wwseneswnwsewnesenwwwnenenenwswwsw',
        'nwnwnenwewsesenwwwnwswnwewwesew',
        'nwseneeseeneeeeenenenenwne',
        'wsenwewnwsenwwnwweenwwwnenwww',
        'seswsenwwswswneswseneswswsesewswseswneswsw',
        'wswswnewswwwenw',
        'neswnenwneneswnesewwwnwenenwneswnenee',
        'enwswwswnenenwnenwswsewnenwswenwenee',
        'seseeeseesewsesesee',
        'wswnewwwwnwwwewwnwswwseswww',
        'wenwnwnwnwsesenwnwnwnwsenwsenewswnwnw',
        'nwnwenwswsenwnwnwwnwnwnwnwnwnwnwnw',
        'sewswnewsesesewnwneseseeneesenesewse',
        'senweswsenwneeeseenwewsweseeeee',
        'swewenenwenenwseswwnenwswneneswnwnw',
        'swseeseswneswenewswnwnwnewneewwesw',
        'senwwnwnwnenenwseneenenewnwnwnwnenwnesew',
        'nwwsewnwwnwnwnewneenenwnwseneneswseswse',
        'nwwsewwwnenenenwnwenwswswswnwwewse',
        'nweswneeeswseneeseeeseseesesenwsw',
        'nwnwswnwnwnwnwnwwenwnewnwse',
        'swwseseswenesewnewseswswwne',
        'eeeeneneeneseweeweeeswenenwe',
        'seseseeseswsesewesewnenenwseswsese',
        'nwenwnewwewnwsenwnwswwnwnwwesenesw',
        'neeneenewnenenenenewneneweeseee',
        'seesweseseeseseeeseseesenew',
        'wenewnwseswwwswwwswneswwswswwwswse',
        'senwnwnwnenenwswnwnwnwnweneneswswnwenwnw',
        'wsenwnwnwnwnwnwwenwnwnwneswnenwsenwnwnw',
        'swseswswswnweseswswswswseseswsw',
        'wneneewnwswseewswseeewneeswew',
        'swsweswseseswnwswswwswswswswsene',
        'swseswswsewneswswswswswswswswswswneswne',
        'sesesesesenesesesesewsenenwsesesesewse',
        'weeneesenenenewneeenenenenee',
        'nwnwnwnwnenwsenwnwneeswnwnwnwnewseenww',
        'ewewesesesewseseneswse',
        'enenwnwnweseswsewneenewwneneswseswwse',
        'nenenenwsenenweweneeneneswneneseenene',
        'wweswswwswswswenesweswswwnwe',
        'enenenesenwnenenenewee',
        'nwwnwnwwnwnwnewesese',
        'nwsewsesenwswswnwneeneseenwenw',
        'swnwnwnwwswnwenwewnwwsweeswnwnew',
        'eeneswseswswnwsewseseswswsesenwseswsesw',
        'newsewnwwnwwswnwwsenw',
        'enweseewseswenweneseeswneeeew',
        'nwnwnwnwnwwsewswnwnwnwwewnwsenwnew',
        'sewswseneneseneseswwwswseseswnesewnesese',
        'ewwswwwwwseswnesewenwwnwwwnwww',
        'wseesenewnwsweswwwsenenwnwwwww',
        'neeneneeeewnesenesenewwwnenenese',
        'eeeeewnweseneneeseeswneeeewe',
        'seseneseseseswsesewswsesese',
        'wswwenwwwnwneswwnwnenwnwnwswwnwnw',
        'seseswenweswseswswswswnwsesenw',
        'wswnwsenwswwwenwswesweneseneseesenw',
        'swnewwwenwsenwwwnesw',
        'swseseseswsesesesesesenwsewseeseswsenene',
        'wenenesweenweeeseneweneneenesw',
        'nwsenwnenwnenwnwnwnwnwnwnwnwnewsenenwse',
        'seseeeswsewsesenesenwseeswse',
        'swnwnewwnwnesewnwnwnwnwwnwnwnwse',
        'eseeeneneeneweeneeee',
        'wneswneenwswseeeeeswneneeneseenwne',
        'seswsesesesesesesesesenwnwnwsenwseswsene',
        'nenenenenewneneneenesenenene',
        'newswweswseewnwnwnwsew',
        'senwnwsesewnwnwenwnwwneeseseswwwsww',
        'eswnwswenenwweneseeeswswee',
        'seesewneeenenenwwenwnwseswswnwesee',
        'swneenwwneneewswneseeewseswwnwnw',
        'newewewwwwwsewwe',
        'nwweswnewwsesweswswwswswnewwww',
        'sewnesweswswwswswswswwsweneswswnwsw',
        'seneenenenenesenwnewnwwseseneswnewenee',
        'nwswswneewnewswewwwsweswswswwnwswe',
        'nenwneswswnwneswsweneenenwnenesw',
        'nenwneneseeswswnenwewnenenesenwnenwnw',
        'swswsweswswseswswnwswswswswenw',
        'swneseswnwseswswswseenwswwswswswswswsw',
        'seneseesesewsesesesesesesesesewsenewse',
        'sweeseswnwsesesewenwnwnwsenwseeenwe',
        'nwnwsenwnwnwseewnwnwwnwnwnwnwnwsenwnenesw',
        'seswweneswwnwwwwwnwwww',
        'wnwwwwsewwneewewswwnwwwww',
        'eeneswswenenenewneeswnee',
        'esesesesenwsewswseneswnwe',
        'nenwswseeeswneswsweneeneseewnenenw',
        'swswswnwswneeswswswswwseswswwswswesesw',
        'swswwseesewnwwnwnewsenwewnw',
        'eseseeneeewseesenwseneeewwnew',
        'neeswswneswsenwsesee',
        'nwnwesweseseseseeneesweseeseewese',
        'seswswsenwswswsenwesesweseneseseswswsesw',
        'neneneswseeswnenenenenwnene',
        'enwswswnwseseswswwneeswswenwswnwswseswsw',
        'wnwwswwneswwwewswswewwwwww',
        'nwnewnwesewsewnwnwwwwwsewsweww',
        'nwseswenwwwenenwsenwwneenwwnwnwsw',
        'sewewwwwnwweswwsewnewswwnwwsww',
        'wwswwweswnwseene',
        'seeseeswsesewesenenenwswsewesesesese',
        'wseswwswswwwnwswewswwnwsw',
        'seswswseneswswswwswswswswsw',
        'neneseewnwwwwwswwwwseswwwww',
        'wwneewwsewswwwwwswnwswswwene',
        'wwswneswwnewswwwwwwswwnewnesee',
        'nenwnenwwwsewwnwnweneswswwnwnwwwsww',
        'ewwnwwwwwswewswwwnwnwwnenww',
        'nwnwnewnwsenenwnwsenenenenwnene',
        'eneeswswnwwwswwwewwswnewwewsw',
        'sesenwseseeeseseseseese',
        'seesesesenwseseseseseseseseseseswnwnwse',
        'wwswwwwwswswwnewswwsw',
        'neswwswswswwswseswswsw',
        'seseweeneseseseswseeeeenenweew',
        'sesenenwswnwseswneswsenwswwsewsenwnee',
        'senewenwsweneseseswsenwnwseseenwnew',
        'swneesenwseswseswseneenwseswswsese',
        'wswwnewwwwwwwww',
        'seeseesesewneenwwsesweeneeneeewse',
        'swnweswnwnwweswsenesenwnwneneneneeene',
        'nenwneewseeeseswneeeeenweenee',
        'sewsewnwswnewnwnewnwwwwnwwwnww',
        'neswswswnwewseswesesenenwnewwnenewsw',
        'senwewswneseeeenweseneeeewseswew',
        'swswseswseseswsenwsese',
        'nwnwewnwnwwnwnwnwswenwnwnwnwseneeseww',
        'nwswwnwsenwnwnenwneenenwwseesenenwsw',
        'nwwnwnwnwnwwnweswnwnweswnwenwnewnw',
        'wsweswswswwneswswneswswswswswswswneswse',
        'ewnewneesesweneswnwenwneesenewnee',
        'sewenwwnwnwnwswwwnwnwnwwnwww',
        'wwwnesenwnwenwwwneswseswswseswnenwsee',
        'seseswnwneeseswwswsewnenwnweewsesese',
        'wnewweseneswseseneweneseneenwnw',
        'seeweswwenwswwwwswwsenwswnwnwne',
        'wswneswneswwswsesewswwnewswnwswsww',
        'nenwnwnwnwnenweenweswwwnwnwswsenwse',
        'eweesenweseneewswenwenweeswe',
        'seneweseeneswweweeswnwweeene',
        'seswneswneswswsewswweseswewswneseswsw',
        'swseseswswnwswswnwswseswswsw',
        'wnenwwnwsenwwsewsenwnwnewwnwnwwwne',
        'wenesewsenwsweneneesenwenwswneswwe',
        'eneneneewneeesenwwseneseweseenwne',
        'nesesesewwnewnwewswswseswnw',
        'wnenwswswwwwewswwwwseswswwswse',
        'enenwnwnwnwnwwnwnwswnwnenesesenwnewsewnw',
        'seswsenwsesesewneesenwneseseneswwswswnwse',
        'eseseseseswseseseswswnenesenwsewnwwseswne',
        'swwsewswwsewewneneswwwnwewnw',
        'wneeenewwneene',
        'eeeneewnwwseeeeeeseseeeee',
        'swswneneneeneneenenesewneenenenenenw',
        'wwwswswwwsewwwwwnenenwwwne',
        'neeneeneseweewneeswnenenwewwnew',
        'enewneenenwnwwnwseneswnenewseenwnwe',
        'wwwwwwwwwsenww',
        'senwsesenwswswseswswseswseswsw',
        'neswweneeneesenwnwneenwseenesenenese',
        'nwnenenenenwnewsenwseneswwnenwsenwnwsenw',
        'enewswnwswswsweswseseswswseseseswseswnwse',
        'nenwswswwsewnwnwswswswesenenwsew',
        'wseswsesenewenenew',
        'wwwnewwnwwneswsewnwwesewnwnww',
        'seeeseseesesesewseese',
        'wswswnwewnwnwewwwseewwnwwe',
        'weeeeeeseweeseseseewenenweee',
        'eewnwneswwsenwweseseeseswwneseseswse',
        'seenenwseeenesenenwweseeneenwee',
        'swseseseseesenesewseseneseswsewwesenene',
        'swnwswnwswswswnwsewwsewnwneesweesww',
        'senenwnwnenewnenwnenwnwnenwnesenenw',
        'seseeesenewnesesenweseeeeeseesw',
        'seeseeseswsenwsewnesesese',
        'seswsewseeneswneeswswseswswsenenwsewsww',
        'seseseseseseseswesesesenwenenwsesesw',
        'ewnwwneneswnweswwsweenwwwsewnee',
        'newswseeswsesesesewnwnesewewneswsese',
        'nwneseswneenewenewweenenwwnwnw',
        'swneswenwenwswesesweeeeeneswene',
        'nwwnenwnwswnwneenwenwnwnenwnwwnwsese',
        'neneweneseeneenenee',
        'eeseswsesewneseseseseeseseseswsenwnwse',
        'nwnwnwnwnwnwnenwnwswnwnwnwnw',
        'nwewsenwsenwwneswwwnwsenwneeswwsenwse',
        'nwwwnwsewwnwnweeswswnwnwnwne',
        'nwenwnenenwenwneswnwswnenwnwnwnwnwsewse',
        'seswseswswswswseswswwswe',
        'wswewwseenenewswswswwswswwswnew',
        'eweenweweewsenweeswnwsenewese',
        'eeeenweeeeeeseseneewsenwsesw',
        'neeneeeneeeeeswnenenwee',
        'nwwwnenwnwwwnwnesenwnwnwse',
        'seenwnenwnwnenwnenwsw'
    ]

    // To move, we parse out the valid directions:
    // If y is even         if y is odd
    // ne: x+1, y+1         x,   y+1
    //  e: x+1, y           x+1, y
    // se: x+1, y-1         x,   y-1
    // sw: x-1, y-1         x-1, y-1
    //  w: x-1, y           x-1, y
    // nw: x-1, y+1         x-1. y+1
    // All moves start from 0,0

    class TileGrid {
        static #MAX_COUNT = 100;

        constructor() { this.t = {}; }
        get blackCount() { return Object.values(this.t).reduce((p, c) => (c === 'black') ? p += 1 : p, 0); }
        static neighbours(x, y) {
            return [
                { 'x': x + Math.abs(y + 1) % 2, 'y': y + 1 },
                { 'x': x + 1, 'y': y },
                { 'x': x + Math.abs(y + 1) % 2, 'y': y - 1 },
                { 'x': x - Math.abs(y) % 2, 'y': y - 1 },
                { 'x': x - 1, 'y': y },
                { 'x': x - Math.abs(y) % 2, 'y': y + 1 }
            ];
        }
        blackNeighbours(x, y) {
            let neighbours = TileGrid.neighbours(x, y);
            let n = 0;
            neighbours.forEach((v) => (this.colourAt(v.x, v.y) === 'black') ? n += 1 : null);
            return n;
        }
        colourAt(x, y) { return (`${x}_${y}` in this.t) ? this.t[`${x}_${y}`] : 'white'; }
        clear() { this.t = {}; }
        flip(x, y) {
            if (!(`${x}_${y}` in this.t)) {
                this.t[`${x}_${y}`] = 'white';
            }
            this.t[`${x}_${y}`] = (this.t[`${x}_${y}`] === 'white') ? 'black' : 'white';
        }
        set(x, y, c) {
            this.t[`${x}_${y}`] = c;
        }
        pathCoords(input) {  // Path always walked from (0, 0) [ie: centre of grid]
            let coords = { 'x': 0, 'y': 0 };
            while (input.length > 0) {
                let dir = input.match(/^(ne|e|se|sw|w|nw)/i)[0];
                input = input.replace(dir, '');
                switch (dir) {
                    case 'ne': coords.x += Math.abs(coords.y + 1) % 2; coords.y += 1; break;
                    case 'e': coords.x += 1; break;
                    case 'se': coords.x += Math.abs(coords.y + 1) % 2; coords.y -= 1; break;
                    case 'sw': coords.x -= Math.abs(coords.y) % 2; coords.y -= 1; break;
                    case 'w': coords.x -= 1; break;
                    case 'nw': coords.x -= Math.abs(coords.y) % 2; coords.y += 1; break;
                }
            }
            return coords;
        }
        getCoords(s) { return {'x': parseInt(s.substring(0, s.indexOf('_'))), 'y': parseInt(s.substring(s.indexOf('_')+1))} };
        walkPath(input) {
            let dst = this.pathCoords(input);
            this.flip(dst.x, dst.y);
        }
        playLife() {
            for (let i=0; i<TileGrid.#MAX_COUNT; i++) {
                let tilesToFlip = new Set();
                let k = Object.keys(this.t);
                k.forEach( (v) => {
                    let coords = this.getCoords(v);
                    if (this.colourAt(coords.x, coords.y) === 'black') {
                        // Process all the neighbouring tiles as well...
                        let n = TileGrid.neighbours(coords.x, coords.y);
                        n.push(coords);
                        n.forEach( (v) => {
                            let c = this.blackNeighbours(v.x, v.y);
                            if (this.colourAt(v.x, v.y) === 'black') {
                                if (c === 0 || c > 2) {
                                    tilesToFlip.add({'coords': v, 'colour': 'white'});
                                }
                            } else {
                                if (c === 2) {
                                    tilesToFlip.add({'coords': v, 'colour': 'black'});
                                }
                            }
                        })
                    }
                });
                // Now set the tiles...
                for (let item of tilesToFlip) {
                    this.set(item.coords.x, item.coords.y, item.colour);
                }
            }
        }
    }
debugger
    (function () {
        let tiles = new TileGrid();
        input.forEach((v) => tiles.walkPath(v) );

        console.log(`Part 1: There are ${tiles.blackCount} black tiles.`);

        // Now, play the game of life...
        tiles.playLife();
        console.log(`Part 2: There are ${tiles.blackCount} black tiles.`);
    })();

}