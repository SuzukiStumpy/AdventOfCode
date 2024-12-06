from enum import IntEnum
from typing import Dict

# Test data
data = """....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
"""

# real data
with open('./data/day6.txt', 'r') as f:
    data = f.read()

class Directions(IntEnum):
    UP = 0
    DOWN = 2
    LEFT = 3
    RIGHT = 1


guard = {
    'row': 0, 
    'col': 0,
    'direction': Directions.UP
}



data = data.splitlines()
for idx in range(len(data)):
    if '^' in data[idx]:
        guard['row'] = idx
        guard['col'] = data[idx].index('^')

    data[idx] = list(data[idx])


def guard_in_range(pos: Dict) -> bool:
    return pos['row'] >= 0 and pos['row'] < len(data) and pos['col'] >= 0 and pos['col'] < len(data[0])


def is_collision(pos: Dict) -> bool:
    directions = [(-1, 0), (0, 1), (1, 0), (0,-1)]

    check_row = pos['row'] + directions[pos['direction']][0]
    check_col = pos['col'] + directions[pos['direction']][1]

    if check_row < 0 or check_row >= len(data) or check_col < 0 or check_col >= len(data[0]):
        return False
    
    return data[check_row][check_col] == '#'

def move(pos: Dict) -> Dict:
    match pos['direction']:
        case Directions.UP:
            pos['row'] -= 1

        case Directions.DOWN:
            pos['row'] += 1

        case Directions.LEFT:
            pos['col'] -= 1

        case Directions.RIGHT:
            pos['col'] += 1

    return pos


# Part 1
while guard_in_range(guard):
    data[guard['row']][guard['col']] = 'X'
    
    if is_collision(guard):
        guard['direction'] += 1
        guard['direction'] %= 4
    else:
        guard = move(guard)

counter = 0
for row in range(0, len(data)):
    for col in range(0, len(data[0])):
        if data[row][col] == 'X':
            counter += 1


print(f"Part 1: {counter}")