from dataclasses import dataclass
from pathlib import Path
from advent_of_code_2025.utils import read_input


@dataclass
class instruction:
    direction: int
    count: int


def parse_input(data: list[str]) -> list[instruction]:
    """Read in the input data and return as a list of instructions with direction
    and count parsed out appropriately"""
    parsed_data: list[instruction] = []
    parsed_data.extend(
        [instruction(1 if v[:1] == "R" else -1, int(v[1:])) for v in data]
    )
    return parsed_data


def part_1() -> None:
    """Part 1 of the first day's puzzle"""
    inputs = read_input(Path("day1.txt"))
    data = parse_input(inputs)

    position = 50
    secret_count = 0

    for i in data:
        position = (position + (i.count * i.direction)) % 100
        if position == 0:
            secret_count += 1

    print(f"Part 1: {secret_count}")


def part_2() -> None:
    """Part 2 of the first day's puzzle"""
    inputs = read_input(Path("day1.txt"))
    data = parse_input(inputs)

    position = 50
    secret_count = 0

    for i in data:
        secret_count += i.count // 100
        to_add = i.count % 100

        new_position = position + (to_add * i.direction)

        if new_position >= 100 or (new_position < 1 and position > 0):
            secret_count += 1

        position = (new_position + 100) % 100

    print(f"Part 2: {secret_count}")
