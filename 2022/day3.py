def priority(item: str) -> int:
    """
    Return the priority of an item in the backpack
    :param item: Single character identifying an item
    :return: priority of the item: a..z == 1..26, A..Z == 27..52
    """
    p = ord(item.lower()) - ord("a") + 1
    if item < "a":
        p += 26
    return p


# Part 1 - find the item common to two halves of the input
data = [line.strip() for line in open("inputs/day3.txt", "r").readlines()]
total_priority = 0

for line in data:
    left = set(line[:len(line)//2])
    right = set(line[len(line)//2:])
    common = left & right

    for item in common:
        total_priority += priority(item)

print("Part 1:", total_priority)

# Part 2 - find the item common to three successive inputs
total_priority = 0
for line1, line2, line3 in zip(*[iter(data)] * 3):
    line1 = set(line1)
    line2 = set(line2)
    line3 = set(line3)
    common = line1 & line2 & line3

    total_priority += priority(common.pop())  # should only be a single item in the union

print("Part 2:", total_priority)


