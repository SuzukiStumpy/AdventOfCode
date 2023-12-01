import re
from collections import deque

original_data = deque()
numbers = dict()

for line in open("inputs/day21.txt", "r").readlines():
    original_data.append(line.strip())

# Part 1
data = original_data.copy()

while len(data) > 0:
    current = data.popleft()
    key, val = current.split(': ')
    if val.isnumeric():
        numbers[key] = int(val)
    else:
        op1, operand, op2 = val.split(' ')
        if op1 in numbers and op2 in numbers:
            val = eval(str(numbers[op1]) + operand + str(numbers[op2]))
            numbers[key] = int(val)
        else:
            data.append(current)

print(f"Part 1: {numbers['root']}")
