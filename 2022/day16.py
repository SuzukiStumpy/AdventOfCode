"""
Didn't manage to solve this one at all...
"""

import re
from heapq import heappush, heappop
from typing import Hashable

class WeightedDiGraph:
    def __init__(self):
        self.nodes = dict()

    def add_node(self, node: str) -> None:
        self.nodes[node] = dict()

    def has_node(self, node: str) -> bool:
        return node in self.nodes

    def add_edge(self, from_node: str, to_node: str, weight: int) -> None:
        self.nodes[from_node][to_node] = weight

    def out_neighbours(self, node: str) -> list:
        return list(self.nodes[node].keys())

    def weight(self, source: str, dest: str) -> int:
        return self.nodes[source][dest]

    def longest_path(self, start: str) -> "WeightedDiGraph":
        # uses djikstra's algorithm with negative weights to simulate a max-
        # priority queue for traversal leading to a longest path/highest cost
        # result
        visited = WeightedDiGraph()
        visited.add_node(start)

        unprocessed = []
        for neighbour in self.out_neighbours(start):
            weight = self.weight(start, neighbour)
            heappush(unprocessed, (-weight, (start, neighbour, weight)) )

        while len(unprocessed) > 0:
            data = heappop(unprocessed)
            cost = data[0]
            edge = data[1]
            prev = edge[0]
            current = edge[1]
            weight = edge[2]

            if not visited.has_node(current):
                visited.add_node(current)
                visited.add_edge(prev, current, weight)
                for neighbour in self.out_neighbours(current):
                    weight = self.weight(current, neighbour)
                    edge = (current, neighbour, weight)
                    heappush(unprocessed, (cost + (-weight), edge))

        return visited


# read the data
data = {}
with open("inputs/day16.txt", "r") as f:
    for line in f.readlines():
        matches = re.match("Valve (\w{2})\D+(\d+).*valves? (.*)", line.strip())

        temp = {"flow": int(matches.group(2)),
                "connections": list(matches.group(3).split(', '))}
        data[matches.group(1)] = temp

flow_map = WeightedDiGraph()

# add valves
for entry in data.keys():
    flow_map.add_node(entry)

# build adjacency map
for source in data.keys():
    for target in data[source]["connections"]:
        flow_map.add_edge(source, target, data[source]["flow"])

paths = flow_map.longest_path('AA')

for node in paths.nodes:
    print(node, paths.nodes[node])


