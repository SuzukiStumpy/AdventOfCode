"use strict";
debugger;

{
	// Get the input list of edges, then build the graph...
	let input = document.body.textContent.trim().split('\n');
	
	// Need to build a graph class to hold the data, then we'll do a
	// Series of BFS searches to get all paths
	class Graph {
		constructor() {
			this.adjacencyList = {};
		}
		addVertex(vertex) {
			if (!this.adjacencyList[vertex]) {
				this.adjacencyList[vertex] = [];
			}
		}
		addEdge(source, destination) {
			if (!this.adjacencyList[source]) {
				this.addVertex(source);
			}
			if (!this.adjacencyList[destination]) {
				this.addVertex(destination);
			}
			this.adjacencyList[source].push(destination);
			this.adjacencyList[destination].push(source);
		}
		removeEdge(source, destination) {
			this.adjacencyList[source] = this.adjacencyList[source].filter( vertex => vertex !== destination );
			this.adjacencyList[destination] = this.adjacencyList[destination].filter( vertex => vertex !== source );
		}
		removeVertex(vertex) {
			while (this.adjacencyList[vertex]) {
				const adjacentVertex = this.adjacencyList[vertex].pop();
				this.removeEdge(vertex, adjacentVertex);
			}
			delete this.adjacencyList[vertex];
		}
	}
	
	Graph.prototype.search = function(start) {
		const queue = [start];
		const result = [];
		const visited = {};
		visited[start] = true;
		let currentVertex;
		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach( neighbour => {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					queue.push(neighbour);
				}
			});
		}
		return result;
	}
	
	Graph.prototype.findAllPaths = function(start, end, path = new Map()) {
		const sourceNode = start;
		const destinationNode = end;
		const newPath = new Map(path);
		
		if (!sourceNode || !destinationNode) return [];
		
		newPath.set(sourceNode);
		
		if (sourceNode === destinationNode) {
			return [Array.from(newPath.keys())];
		}
		
		const paths = [];
		this.adjacencyList[sourceNode].forEach( neighbour => {
			if ((!newPath.has(neighbour) && neighbour.toLowerCase() === neighbour) || neighbour.toUpperCase() === neighbour) {
				const nextPaths = this.findAllPaths(neighbour, destinationNode, newPath);
				nextPaths.forEach( (nextPath) => paths.push(nextPath));
			}
		});
		return paths;
	}
	
	let cave = new Graph();
	input.forEach( x => {
		const nodes = x.split('-');
		cave.addEdge(nodes[0], nodes[1]);
	});
	
	let paths = cave.findAllPaths('start', 'end');
	console.log(`All paths:`, paths);
}