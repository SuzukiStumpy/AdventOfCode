for line in open("inputs/day6.txt", "r").readlines():
    for index in range(len(line) - 4):
        if len(set(line[index:index+4])) == 4:
            print(f"Part 1: {index+4}")
            break

    for index in range(len(line) - 14):
        if len(set(line[index:index+14])) == 14:
            print(f"Part 1: {index+14}")
            break


