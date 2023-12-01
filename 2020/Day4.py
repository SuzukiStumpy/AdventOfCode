import string
import re
from functools import reduce

data = [line.strip() for line in open("data/day4.txt")]
passports = []
passport = dict()
for line in data:
    if len(line) > 0:
        fields = list(line.split(' '))
        for field in fields:
            fld, val = field.split(':')
            passport[fld] = val
    else:
        passports.append(passport)
        passport = dict()

passports.append(passport)  # append the last passport because it doesn't get caught otherwise

valid_1 = 0
valid_2 = 0
for passport in passports:
    # part 1
    if len(passport) == 8:
        valid_1 += 1
    elif len(passport) == 7 and 'cid' not in passport:
        valid_1 += 1

    # part 2
    valid = True
    if len(passport) < 7:
        valid = False
    else:
        valid = reduce(lambda a,c: a and c, [field in ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'] for field in passport.keys()], True)

        if valid:
            for field, value in passport.items():
                if field == 'byr':
                    valid = (1919 < int(value) <= 2002)
                if field == 'iyr':
                    valid = (2009 < int(value) <= 2020)
                if field == 'eyr':
                    valid = (2019 < int(value) <= 2030)
                if field == 'hgt':
                    if value.find('cm') != -1:
                        valid = (149 < int(value[:-2]) <= 193)
                    elif value.find('in') != -1:
                        valid = (58 < int(value[:2]) <= 76)
                    else:
                        valid = False
                if field == 'hcl':
                    valid = (re.search('^#[0-9a-f]{6}$', value) is not None)
                if field == 'ecl':
                    valid = (value in ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'])
                if field == 'pid':
                    valid = (re.search('^[0-9]{9}$', value) is not None)

                if not valid:
                    break

    if valid:
        valid_2 += 1

print("Part 1:", valid_1)
print("Part 2:", valid_2)
