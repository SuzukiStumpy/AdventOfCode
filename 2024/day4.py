# test data
data = """MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
""".splitlines()

# real data - uncomment below
with open('./data/day4.txt', 'r') as f:
    data = f.read().splitlines()

# data prep (split to lists of characters)
for idx in range(len(data)):
    data[idx] = list(data[idx])


def search(row: int, col: int, dx: int, dy: int, find_idx: int) -> bool:
    """Search for the string XMAS in the data starting from
       the character at (row, col).  Returns the number of words
       found
    """
    search_string = 'XMAS'
    
    if row + dx < 0 or row + dx >= len(data[row]):
        return False
    if col + dy < 0 or col + dy >= len(data):
        return False
    if data[row + dx][col + dy] == search_string[find_idx]:
        # go another level deeper?
        if find_idx >= len(search_string) - 1:
            return True  # No need to recurse again
        else:
            return search(row + dx, col + dy, dx, dy, find_idx + 1)

# Part 1
word_count = 0

for row in range(0, len(data)):
    for col in range(0, len(data[row])):
        if data[row][col] == 'X':
            for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    if not (dx == 0 and dy == 0):
                        word_count += 1 if search(row, col, dx, dy, 1) is True else 0

print (f'Part 1: XMAS appears {word_count} times.')

# Part 2