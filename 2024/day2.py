# test data
from typing import List


data = r"""7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
"""

# real data - comment out to use test data
with open('data/day2.txt', 'r') as f:
    data = f.read()


def process_report(report: List[int]) -> bool:
    last = report[0]
    is_ascending = None

    for level in range(1, len(report)):
        diff = report[level] - last

        # First check that we're safe
        if (0 < abs(diff) <= 3):
            if is_ascending is None:
                is_ascending = diff > 0

            if (diff > 0 and is_ascending) or (diff < 0 and not is_ascending):
                last = report[level]
            else:
                return False
        else:
            return False

    return True        



# part 1
safe = 0

for report in data.splitlines():
    report = [int(item) for item in report.split(' ')]
    safe += 1 if process_report(report) is True else 0

print(f"Part 1: There are {safe} safe reports.")

# part 2
safe = 0

for report in data.splitlines():
    report = [int(item) for item in report.split(' ')]
    
    if process_report(report) is True:
        safe += 1
    else:
        for alt in range(0, len(report)):
            if process_report(report[:alt] + report[alt+1:]) is True:
                safe += 1
                break


print(f"Part 2: There are {safe} safe reports.")