"""
Note:  Only does part one.   Part 2 solution (in finite time, at least) eludes me
"""
import re


def manhattan(x1: int, y1: int, x2: int, y2: int) -> int:
    """Returns the manhattan distance between two points."""
    return abs(x1 - x2) + abs(y1 - y2)


def calculate_bound_for_row(row: int, sensor: dict) -> tuple | None:
    """Returns the lo and hi offset within the given row, for the given sensor.
       if the sensor doesn't cover the row at all, simply returns None
    """
    vertical_offset = abs(sensor['y'] - row)

    # check that we actually cover the row in question
    if vertical_offset > sensor['manhattan']:
        return None

    horizontal_offset = abs(sensor['manhattan'] - vertical_offset)
    lo, hi = sensor['x'] - horizontal_offset, sensor['x'] + horizontal_offset
    return lo, hi


def get_exclusions_for(row: int, data: list) -> list:
    # get the positions that we can't cater for within the given row
    for sensor in data:
        bounds = calculate_bound_for_row(row, sensor)
        if bounds is not None:
            excluded_ranges.append(bounds)

    excluded_ranges.sort()

    # Merge the ranges where we can
    bound1 = excluded_ranges[0]
    final_bounds = []

    for index in range(1, len(excluded_ranges)):
        bound2 = excluded_ranges[index]

        if bound2[0] <= bound1[1] < bound2[1]:
            bound1 = (bound1[0], bound2[1])
        else:
            if bound2[0] > bound1[1]:
                final_bounds.append(bound1)
                bound1 = bound2

    # make sure our final state is also saved.
    final_bounds.append(bound1)
    return final_bounds


EXCLUDED_ROW = 2000000
data = []
excluded_ranges = []

for line in open("inputs/day15.txt", "r").readlines():
    matches = re.match("Sensor at x=(.+), y=(.+): closest beacon is at x=(.+), y=(.+)", line)
    temp = {
        'x': int(matches.group(1)),
        'y': int(matches.group(2)),
        'bx': int(matches.group(3)),
        'by': int(matches.group(4)),
    }
    temp['manhattan'] = manhattan(temp['x'], temp['y'], temp['bx'], temp['by'])
    data.append(temp)

final_bounds = get_exclusions_for(EXCLUDED_ROW, data)

total_positions = 0
for bound in final_bounds:
    total_positions += bound[1] - bound[0]

print(f"Part 1: {total_positions}")


