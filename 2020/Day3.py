from math import prod
data = [line.strip() for line in open("data\day3.txt")]
MAP_WIDTH = len(data[0])
slopes = [
    {"across": 3, "down": 1},
    {"across": 1, "down": 1},
    {"across": 5, "down": 1},
    {"across": 7, "down": 1},
    {"across": 1, "down": 2}
]

trees = []

for slope in slopes:
    current = {"x": 0, "y": 0}
    tree_count = 0

    while current["y"] < len(data):
        current["x"] = (current["x"] + slope["across"]) % len(data[0])
        current["y"] += slope["down"]

        if current["y"] < len(data):
            tree_count += 1 if data[current["y"]][current["x"]] == "#" else 0

    trees.append(tree_count)

print("Part 1:", trees[0])
print("Part 2:", prod(trees))
