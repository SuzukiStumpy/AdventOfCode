calories = []
current = 0
with open('inputs/day1.txt') as f:
    for line in f.readlines():
        if line.strip() == "":
            calories.append(current)
            current = 0
        else:
            current += int(line)
    # make sure we capture the final entry
    calories.append(current)

calories.sort(reverse=True)

print("Part 1:", calories[0])
print("Part 2:", sum(calories[0:3]))
