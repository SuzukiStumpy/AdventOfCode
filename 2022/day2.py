# Part 1
wins = {'A': 'Y', 'B': 'Z', 'C': 'X'}
draws = {'A': 'X', 'B': 'Y', 'C': 'Z'}
losses = {'A': 'Z', 'B': 'X', 'C': 'Y'} # For part 2
scores = {'X': 1, 'Y': 2, 'Z': 3}
total_score = 0
with open('inputs/day2.txt') as f:
    for line in f.readlines():
        (opp, me) = tuple(line.strip().split(' '))
        total_score += ord(me) - ord('X') + 1
        if wins[opp] == me:
            total_score += 6
        elif draws[opp] == me:
            total_score += 3

print("Part 1:", total_score)

# Part 2
total_score = 0
with open('inputs/day2.txt') as f:
    for line in f.readlines():
        (opp, me) = tuple(line.strip().split(' '))

        # Determine if we need to win, lose or draw
        if me == 'X':  # lose
            total_score += scores[losses[opp]]
        elif me == 'Y':  # draw
            total_score += scores[draws[opp]] + 3
        else:  # win
            total_score += scores[wins[opp]] + 6

print("Part 2:", total_score)
