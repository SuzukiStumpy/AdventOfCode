from collections import deque
import re

data = [line.strip() for line in open("inputs/day10.txt", "r")]

x = 1
cycle = 0
signal_strength = []
screen = []
iq = deque()

# read the instructions into the processing queue
for instruction in data:
    # add an extra noop for 2-cycle instructions
    if instruction != 'noop':
        iq.append('noop')
    iq.append(instruction)

# now, process the instructions
while len(iq) > 0:
    instruction = iq.popleft()

    # for part 1
    if ((cycle+1)+20) % 40 == 0:
        signal_strength.append((cycle+1) * x)

    # for part 2
    col = cycle % 40
    screen.append('#' if abs(col - x) <= 1 else ' ')

    if instruction != 'noop':
        x += int(re.match('.* (.+)$', instruction).group(1))

    cycle += 1

print(f"Part 1: {sum(signal_strength)}")

print("Part 2:")
for index in range(len(screen)):
    print(screen[index], end='')
    if (index+1) % 40 == 0:
        print()
