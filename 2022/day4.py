data = [line.strip() for line in open("inputs/day4.txt", "r").readlines()]


def is_fully_contained(range1: tuple, range2: tuple) -> bool:
    """returns true if one range is fully contained by the other"""
    return (range1[0] <= range2[0] and range1[1] >= range2[1]) or (range2[0] <= range1[0] and range2[1] >= range1[1])


def overlaps(range1: tuple, range2: tuple) -> bool:
    """returns true if either of the ranges overlaps at all"""
    return not (min(range1[1], range2[1]) < max(range1[0], range2[0]))


fully_contained_count = 0
overlap_count = 0

for line in data:
    assignment_1, assignment_2 = line.split(',')
    range1 = tuple(map(int, assignment_1.split('-')))
    range2 = tuple(map(int, assignment_2.split('-')))

    if is_fully_contained(range1, range2):
        fully_contained_count += 1

    if overlaps(range1, range2):
        overlap_count += 1

print("Part 1:", fully_contained_count)
print("Part 2:", overlap_count)
