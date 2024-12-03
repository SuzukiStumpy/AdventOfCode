import re

# test data
data = ["xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"]

# real data
with open('./data/day3.txt', 'r') as f:
    data = f.readlines()

# Part 1
total = 0

for line in data:
    matches = re.findall(r"mul\((\d+,\d+)\)", line)

    for match in matches:
        [left, right] = match.split(',')
        total += int(left) * int(right)
        
print(f'Part 1: Total is {total}')

# Part 2
enabled = True
total = 0

for line in data:
    matches = re.finditer(r"mul\((\d+,\d+)\)|(don't)\(\)|(do)\(\)", line)

    for match in matches:
        (vals, off, on) = match.groups()
        
        if off is not None:
            enabled = False
        if on is not None:
            enabled = True
        if vals is not None and enabled is True:
            [left, right] = vals.split(',')
            total += int(left) * int(right)

print(f'Part 2: Total is {total}')
