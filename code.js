function dijkstra(graph, sourceNode) {
  // Array to store the shortest distance
  let distance = Array(graph.length).fill(Infinity);
  
  // Array to keep track of visited nodes
  //instead of using [] I modified to use .has() which has more complexity benefits and works best with new Set()
  let visitedNodes = new Set();
  
  // Set the distance from the source node to itself as 0
  distance[sourceNode] = 0;

  // Loop until all nodes are visited
  while (visitedNodes.length !== graph.length) {
    let minDistance = Infinity;
    
    // I was debugging for a while and then I read that if I set this to -1 
    // then I will be able to check if no further nodes can be reached. 
    // I'm working on testing this and continuing to modify my test code
    
    let node = -1;
    
    // Find the unvisited node with the smallest distance
  
    for (let i = 0; i < graph.length; i++) {
      if (distance[i] < minDistance && !visitedNodes.has(i)) {
        minDistance = distance[i];
        node = i;
      }
    }
    // This is required because if no unvisited node was found, I need to be able to break the loop
    if (node === -1) break;
    //needed to modify from push to add in order to work with .has()
    visitedNodes.add(node);
    
    // Update distances to adjacent nodes, and work on calculating nextNode
    // ran into errors on my testing revieved [0,7,8,10,8,5] which was not the expected so added in these tests
    for (let nextNode = 0; nextNode < graph.length; nextNode++) {
      if (graph[node][nextNode] > 0 && !visitedNodes.has(nextNode)) {
        let newDistance = distance[node] + graph[node][nextNode];
         console.log(`Considering edge ${node} -> ${nextNode}, Current distance: ${distance[nextNode]}, New distance: ${newDistance}`);
        
        if (newDistance < distance[nextNode]) {
          distance[nextNode] = newDistance;
          console.log(`Updating distance of ${nextNode} to ${newDistance}`);
        }
      }
    }
  }
  return distance;
}
