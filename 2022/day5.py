import re


def read_stack_data(data: list) -> list:
    """Take the stack definition data and form it into a list of stacks with
       starting index 0.  Deals with a max number of 9 stacks and auto adjusts
       the resulting list to suit the data
    """
    stacks = [None] * 9
    for col in [1, 5, 9, 13, 17, 21, 25, 29, 33, 27]:
        for row in range(len(data) - 2, -1, -1):
            if col < len(data[row]):
                if data[row][col] != ' ':
                    if stacks[(col - 1) // 4] is None:
                        stacks[(col - 1) // 4] = []
                    stacks[(col - 1) // 4].append(data[row][col])
    return [s for s in stacks if s is not None]


def move_1(number: int, from_stack: int, to_stack: int, stacks: list) -> None:
    """Moves a number of boxes from one stack to another _individually_"""
    for count in range(number):
        stacks[to_stack-1].append(stacks[from_stack-1].pop())


def move_2(number: int, from_stack: int, to_stack: int, stacks: list) -> None:
    """Moves a number of boxes from one stack to another _as a single unit_"""
    box_range_start = len(stacks[from_stack-1]) - number
    stacks[to_stack-1].extend(stacks[from_stack-1][box_range_start:])
    del stacks[from_stack-1][box_range_start:]


data = [line.strip('\n') for line in open("inputs/day5.txt", "r").readlines()]
stack_data = []

# get the stack definitions into their own dataset first...
for index in range(len(data)):
    if data[index] == "":
        break
    else:
        stack_data.append(data[index])

stacks = read_stack_data(stack_data)
instructions_start = index

# now, parse the instructions
for index in range(instructions_start + 1, len(data)):
    number, from_stack, to_stack = tuple(map(int, re.findall("^move (\d*) from (\d*) to (\d*)$", data[index])[0]))
    move_1(number, from_stack, to_stack, stacks)


print("Part 1:", "".join([x[-1] for x in stacks]))

# Part 2
stacks = read_stack_data(stack_data)  # reinitialise the stacks...

# now, parse the instructions
for index in range(instructions_start + 1, len(data)):
    number, from_stack, to_stack = tuple(map(int, re.findall("^move (\d*) from (\d*) to (\d*)$", data[index])[0]))
    move_2(number, from_stack, to_stack, stacks)

print("Part 2:", "".join([x[-1] for x in stacks]))
