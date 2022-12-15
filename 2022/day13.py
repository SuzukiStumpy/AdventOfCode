def is_ordered(left: list, right: list) -> int:
    """Returns 1 if inputs are in order, -1 if inputs are not in order, 0 if
       we are undecided
    """
    sub_order = 0

    for i in range(min(len(left), len(right))):
        l = left[i]
        r = right[i]

        if type(l) == type(r) == int:
            if l < r:
                return 1
            elif r < l:
                return -1
            # otherwise, we're undecided and continue to parse

        elif type(l) != type(r):
            # one of the values is an int, the other a list

            l = [l] if type(l) is int else l
            r = [r] if type(r) is int else r
            sub_order = is_ordered(l, r)

        else:
            # both are lists
            sub_order = is_ordered(l, r)

        # if we've decided on a result, return immediately
        if sub_order != 0:
            return sub_order

    # if we reach here, we've run off the end of one of the lists...
    if len(left) < len(right):
        return 1
    elif len(right) < len(left):
        return -1
    else:
        return 0


data = []
sum_of_index = 0

with open("inputs/day13.txt", "r") as f:
    for line in f.readlines():
        line = line.strip()
        if line != '':
            data.append(eval(line))

for index in range(0, len(data), 2):
    left, right = data[index], data[index+1]

    if is_ordered(left, right) > 0:
        sum_of_index += (index // 2) + 1

print(f"Part 1: {sum_of_index}")

data.append([[2]])
data.append([[6]])

for index in range(len(data)-1):
    for index2 in range(index + 1, len(data)):
        left = data[index]
        right = data[index2]
        order = is_ordered(left, right)
        if order < 0:
            data[index], data[index2] = data[index2], data[index]

print(f"Part 2: {(data.index([[2]]) + 1) * (data.index([[6]]) + 1)}")

