import math
from collections import deque
from typing import Hashable

# get the input and split into lists of characters
data = [list(x for x in line.strip()) for line in open("inputs/day12.txt", "r")]
ROWS = len(data)
COLS = len(data[0])

class Graph:
    def __init__(self) -> None:
        self.nodes = dict()

    def add_node(self, node: Hashable) -> None:
        if not self.has_node(node):
            self.nodes[node] = []

    def add_edge(self, from_node: Hashable, to_node: Hashable) -> None:
        if to_node not in self.nodes[from_node]:
            self.nodes[from_node].append(to_node)

    def has_node(self, node:Hashable) -> bool:
        return node in self.nodes.keys()

    def out_neigbours(self, node: Hashable) -> [Hashable]:
        if self.has_node(node):
            return self.nodes[node]
        else:
            return []

    def bfs(self, start: Hashable, end: Hashable) -> "Graph":
        visited = Graph()
        visited.add_node(start)
        unprocessed = deque()
        for neighbour in self.out_neigbours(start):
            unprocessed.append( (start, neighbour) )

        while len(unprocessed) > 0:
            edge = unprocessed.popleft()
            previous = edge[0]
            current = edge[1]
            if not visited.has_node(current):
                visited.add_node(current)
                visited.add_edge(current, previous)
                # terminate early once we hit the end node
                if current == end:
                    return visited
                for neighbour in self.out_neigbours(current):
                    unprocessed.append( (current, neighbour) )

        return visited


def get_path_length(graph: Graph, start: Hashable, end: Hashable) -> int | None:
    """Perform a BFS on the graph to get the depth of the end node, then trace
       the path back up the tree to the start to get the depth
    """
    path_graph = graph.bfs(start, end)
    visited = []
    current = end

    while current != start:
        visited.append(current)
        neighbours = path_graph.out_neigbours(current)
        # for some reason, this node is unconnected
        if len(neighbours) == 0:
            return None
        else:
            current = neighbours[0]

    return len(visited)


def can_connect(from_node: str, to_node: str) -> bool:
    if 0 <= abs(ord(to_node) - ord(from_node)) <= 1:
        return True
    elif ord(to_node) < ord(from_node):
        return True
    else:
        return False


# build the terrain map graph
terrain = Graph()
START = None
END = None

for row in range(ROWS):
    for col in range(COLS):
        if data[row][col] == 'S':
            START = (row, col)
            data[row][col] = 'a'
        elif data[row][col] == 'E':
            END = (row, col)
            data[row][col] = 'z'
        terrain.add_node((row, col))

for row in range(ROWS - 1):
    for col in range(COLS - 1):
        if can_connect(data[row][col], data[row][col+1]):
            terrain.add_edge((row, col), (row, col+1))
        if can_connect(data[row][col+1], data[row][col]):
            terrain.add_edge((row, col+1), (row, col))
        if can_connect(data[row][col], data[row+1][col]):
            terrain.add_edge((row, col), (row+1, col))
        if can_connect(data[row+1][col], data[row][col]):
            terrain.add_edge((row+1, col), (row, col))


print(f"Part 1: {get_path_length(terrain, START, END)}")

shortest_path = ROWS * COLS  # actual path _must_ be shorter than this

# we have some paths that are not complete, so must cater for these in the
# search results (hence the checking for None type in get_path_length()
for row in range(ROWS):
    for col in range(COLS):
        if data[row][col] == 'a':
            current = get_path_length(terrain, (row, col), END)
            if current:
                shortest_path = min(shortest_path, current)

print(f"Part 2: {shortest_path}")

