shapes = [
    [
        30    # ..####.
    ],
    [
        8,    # ...#...
        28,   # ..###..
        8     # ...#...
    ],
    [
        4,   # ....#..
        4,   # ....#..
        28   # ..###..
    ],
    [
        16,  # ..#....
        16,  # ..#....
        16,  # ..#....
        16   # ..#....
    ],
    [
        24,  # ..##...
        24   # ..##...
    ]
]

tower = []
wind_direction = [x for x in open("inputs/day17.txt", "r")]
current_shape = 0
wind_index = 0


def move_left(shape: list, stack: list, shape_top: int, stack_top: int) -> bool:
    """
    If the shape can move left, moves it to the left and returns true.
    If the shape can't move left, leaves the input as-is and returns false.
    :param shape: the shape to move (moves it if possible)
    :param stack: the current stack of old shapes
    :param shape_top: the height of the top row of the shape
    :param stack_top: the current height of the stack
    :return: True if we can move, false otherwise
    """
    working_shape = shape.copy()

    for row in range(len(working_shape)):
        # Check that we're not hitting the left edge of the stack
        if working_shape[row] & 64 != 0:
            return False
        else:
            # Now we need to check that the shape won't hit part of the
            # existing stack
            working_shape[row] = working_shape[row] << 1

            if shape_top - row <= stack_top:
                if row & stack[shape_top - row] != 0:
                    return False

    # If we get here, then the shape could be moved, so update shape and return
    shape = working_shape
    return True


def move_right(shape: list, stack: list, shape_top: int, stack_top: int) -> bool:
    """
    If the shape can move right, moves it to the right and returns true.
    If the shape can't move right, leaves the input as-is and returns false.
    :param shape: the shape to move (moves it if possible)
    :param stack: the current stack of old shapes
    :param shape_top: the height of the top row of the shape
    :param stack_top: the current height of the stack
    :return: True if we can move, false otherwise
    """
    working_shape = shape.copy()

    for row in range(len(working_shape)):
        # Check that we're not hitting the left edge of the stack
        if working_shape[row] & 1 != 0:
            return False
        else:
            # Now we need to check that the shape won't hit part of the
            # existing stack
            working_shape[row] = working_shape[row] >> 1

            if shape_top - row <= stack_top:
                if row & stack[shape_top - row] != 0:
                    return False

    # If we get here, then the shape could be moved, so update shape and return
    shape = working_shape
    return True


def can_fall(shape: list, stack: list, shape_top: int, stack_top: int) -> bool:
    """
    If the shape can drop,
    :param shape:
    :param stack:
    :param shape_top:
    :param stack_top:
    :return:
    """
