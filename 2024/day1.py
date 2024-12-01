import pandas as pd

# test data
df = pd.DataFrame({0: [3,4,2,1,3,3], 1: [4,3,5,3,9,3]})

df = pd.read_csv('./data/day1.txt', sep="   ", header=None, engine='python')

# part 1
sorted_0 = df[0].sort_values().tolist()
sorted_1 = df[1].sort_values().tolist()

total_distance = 0

for idx in range(0, len(sorted_0)):
    total_distance += abs(sorted_0[idx] - sorted_1[idx])

print(f'Part 1: {total_distance}')

# part 2
counts= df[1].value_counts()
similarity = 0

for _, row in df.iterrows():
    similarity += (row[0] * counts[row[0]]) if row[0] in counts else 0

print(f'Part 2: {similarity}')

