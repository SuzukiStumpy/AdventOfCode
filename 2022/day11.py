import math
from typing import Callable
from collections import Counter


class Monkey:
    """Simulates the operation of an individual monkey in the problem"""
    def __init__(self, holding: [int], worry_divisor: int, operation: Callable, test: Callable) -> None:
        self.items = holding
        self.worry_divisor = worry_divisor
        self.operation = operation
        self.test = test
        self.inspected = 0

    def process_item(self) -> (int, int):
        """Inspects an individual item and returns the ID of the monkey to throw
           it to along with the new worry level for the item
           Returns a tuple of ints: (new_monkey, worry_level)
           Precondition: len(self.items) > 0
        """
        self.inspected += 1
        worry_level = self.operation(self.items.pop()) // self.worry_divisor
        new_monkey = self.test(worry_level)
        return new_monkey, worry_level

    def catch(self, item: int) -> None:
        self.items.append(item)

    def has_items(self) -> bool:
        return len(self.items) > 0

    def inspections(self) -> int:
        return self.inspected

    def __str__(self) -> str:
        """Returns a list of what the monkey is holding"""
        return ", ".join(str(item) for item in self.items)


for rounds in [20, 10000]:
    worry_divisor = 3 if rounds == 20 else 1

    monkeys = [
        Monkey([85, 77, 77], worry_divisor, lambda x: x * 7, lambda x: 6 if x % 19 == 0 else 7),
        Monkey([80, 99], worry_divisor, lambda x: x * 11, lambda x: 3 if x % 3 == 0 else 5),
        Monkey([74, 60, 74, 63, 86, 92, 80], worry_divisor, lambda x: x + 8, lambda x: 0 if x % 13 == 0 else 6),
        Monkey([71, 58, 93, 65, 80, 68, 54, 71], worry_divisor, lambda x: x + 7, lambda x: 2 if x % 7 == 0 else 4),
        Monkey([97, 56, 79, 65, 58], worry_divisor, lambda x: x + 5, lambda x: 2 if x % 5 == 0 else 0),
        Monkey([77], worry_divisor, lambda x: x + 4,  lambda x: 4 if x % 11 == 0 else 3),
        Monkey([99, 90, 84, 50], worry_divisor, lambda x: x * x, lambda x: 7 if x % 17 == 0 else 1),
        Monkey([50, 66, 61, 92, 64, 78], worry_divisor, lambda x: x + 3, lambda x: 5 if x % 2 == 0 else 1)
    ]
    MAX_WORRY = 19 * 3 * 13 * 7 * 5 * 11 * 17 * 2  # The product of all the test factors

    for i in range(rounds):
        for monkey in range(len(monkeys)):
            while monkeys[monkey].has_items():
                new_monkey, item = monkeys[monkey].process_item()
                monkeys[new_monkey].catch(item % MAX_WORRY)

    # after n rounds, see who is most active:
    activity = Counter()

    for monkey in range(len(monkeys)):
        activity[monkey] = monkeys[monkey].inspections()

    print(f"Part {'1' if rounds == 20 else '2'}: {math.prod([x[1] for x in activity.most_common(2)])}")
