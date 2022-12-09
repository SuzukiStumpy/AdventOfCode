data = []
LEFT = 0
RIGHT = 1
UP = 2
DOWN = 3

for line in open('inputs/day8.txt', 'r').readlines():
    row = list(map(int, [c for c in line.strip()]))
    data.append(row)

MAX_ROWS = len(data)
MAX_COLS = len(data[0])
vis_count = 0


def visible(row: int, col: int, direction: int) -> bool:
    current_row = row
    current_col = col
    height = data[row][col]

    if direction == LEFT:
        while current_col > 0:
            current_col -= 1
            if data[current_row][current_col] >= height:
                return False
    elif direction == RIGHT:
        while current_col < MAX_COLS - 1:
            current_col += 1
            if data[current_row][current_col] >= height:
                return False
    elif direction == UP:
        while current_row > 0:
            current_row -= 1
            if data[current_row][current_col] >= height:
                return False
    else:
        while current_row < MAX_ROWS - 1:
            current_row += 1
            if data[current_row][current_col] >= height:
                return False
    return True


def view_distance(row: int, col: int, dir: int) -> int:
    current_row = row
    current_col = col
    height = data[row][col]
    dist = 0
    if dir == LEFT:
        while current_col > 0:
            dist += 1
            if data[current_row][current_col - 1] >= height:
                break
            current_col -= 1

    elif dir == RIGHT:
        while current_col < MAX_COLS - 1:
            dist += 1
            if data[current_row][current_col + 1] >= height:
                break
            current_col += 1

    elif dir == UP:
        while current_row > 0:
            dist += 1
            if data[current_row - 1][current_col] >= height:
                break
            current_row -= 1

    else:
        while current_row < MAX_ROWS - 1:
            dist += 1
            if data[current_row + 1][current_col] >= height:
                break
            current_row += 1

    return dist


def scenic_score(row: int, col: int) -> int:
    return view_distance(row, col, LEFT) * view_distance(row, col, RIGHT) * \
        view_distance(row, col, UP) * view_distance(row, col, DOWN)


for row in range(MAX_ROWS):
    for col in range(MAX_COLS):
        if row == 0 or col == 0 or row == MAX_ROWS - 1 or col == MAX_COLS - 1 or \
                visible(row, col, LEFT) or visible(row, col, RIGHT) or \
                visible(row, col, UP) or visible(row, col, DOWN):
            vis_count += 1

print(f"Part 1: {vis_count}")

max_score = 0
for row in range(MAX_ROWS):
    for col in range(MAX_COLS):
        max_score = max(scenic_score(row, col), max_score)

print(f"Part 2: {max_score}")
