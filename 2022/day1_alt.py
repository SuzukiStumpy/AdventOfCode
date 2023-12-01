from collections import Counter
calories = Counter()
index = 0
with open('inputs/day1.txt') as f:
    for line in f.readlines():
        if line.strip() == "":
            index += 1
        else:
            calories[index] += int(line)

print("Part 1:", calories.most_common(1)[0][1])
print("Part 2:", sum(x[1] for x in calories.most_common(3)))
