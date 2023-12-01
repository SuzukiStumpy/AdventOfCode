from collections import Counter
data = [line.strip() for line in open('data\day2.txt')]

# Part 1
valid1 = 0
valid2 = 0
for line in data:
    letters = Counter()
    (count, letter, password) = line.split(' ')
    (lo, hi) = count.split('-')
    lo = int(lo)
    hi = int(hi)
    letter = letter[0]

    # Compute part 1
    for c in password:
        letters[c] += 1
    if lo <= letters[letter] <= hi:
        valid1 += 1

    # Compute part 2
    if (password[lo-1] == letter or password[hi-1] == letter) and password[lo-1] != password[hi-1]:
        valid2 += 1
print("Part 1:", valid1)
print("Part 2:", valid2)