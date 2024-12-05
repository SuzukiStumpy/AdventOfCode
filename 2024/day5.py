from typing import List

# sample data
data = """47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47
"""

# real data
with open('./data/day5.txt', 'r') as f:
    data = f.read()

data = data.splitlines()

# parse out the data into rules + sequences
rule_data = []
page_data = []

parse_rules = True
for idx in range(0, len(data)):
    if data[idx] == '':
        parse_rules = not parse_rules
    elif parse_rules:
        rule_data.append([int(value) for value in data[idx].split('|')])
    else:
        page_data.append([int(value) for value in data[idx].split(',')])


def get_mid_page(pages: List[int]) -> int:
    return pages[len(pages) // 2]


def is_valid(pages: List[int]) -> bool:
    for [first, second] in rule_data:
        try:
            first_index = pages.index(first)
            second_index = pages.index(second)
            if second_index < first_index:
                return False
        except ValueError:
            # first or second value not in list
            continue

    return True


def reorder(pages: List[int]) -> List[int]:
    while not is_valid(pages):
        for [first, second] in rule_data:
            try:
                first_index = pages.index(first)
                second_index = pages.index(second)
                if second_index < first_index:
                    tmp = pages.pop(second_index)
                    pages.insert(first_index, tmp)
            except ValueError:
                continue

    return pages


# Do processing for both parts
total = 0
total2 = 0
for pages in page_data:
    if is_valid(pages):
        total += get_mid_page(pages)
    else:
        total2 += get_mid_page(reorder(pages))

print(f'Part 1: The sum total for valid pages is {total}')
print(f'Part 2: The sum total for invalid pages is {total2}')