function dijkstra(graph, sourceNode) {
  // Array to store the shortest distance
  let distance = Array(graph.length).fill(Infinity);
  
  // Array to keep track of visited nodes
  let visitedNodes = [];
  
  // Set the distance from the source node to itself as 0
  distance[sourceNode] = 0;

  // Loop until all nodes are visited
  while (visitedNodes.length !== graph.length) {
    let minDistance = Infinity;
    let node = 0;
    // Find the unvisited node with the smallest distance
    for (let i = 0; i < graph.length; i++) {
      if (distance[i] < minDistance && !visitedNodes.includes(i)) {
        minDistance = distance[i];
        node = i;
      }
    }

    visitedNodes.push(node);

    // Update distances to adjacent nodes, and work on calculating nextNode
    for (let nextNode = 0; nextNode < graph.length; nextNode++) {
      if (graph[node][nextNode] > 0 && !visitedNodes.includes(nextNode)) {
        let newDistance = distance[node] + graph[node][nextNode];
        if (newDistance < distance[nextNode]) {
          distance[nextNode] = newDistance;
        }
      }
    }
  }
  return distance;
}
