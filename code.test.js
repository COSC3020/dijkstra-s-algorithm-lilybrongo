// I referenced dijkstra-s-algorithm-howardthegr8one-1 test code to see a layout of a written test case

const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

function runTests() {
  // Test case 1: Simple graph
  // This test will check if a simple graph with a straightforward path will return the correct distances.
  const graph1 = [
    [0, 1, 4, 0, 0, 0],
    [1, 0, 4, 2, 7, 0],
    [4, 4, 0, 3, 5, 0],
    [0, 2, 3, 0, 4, 6],
    [0, 7, 5, 4, 0, 7],
    [0, 0, 0, 6, 7, 0]
  ];
  const result1 = dijkstra(graph1, 0);
  assert.deepStrictEqual(result1, [0, 1, 4, 3, 7, 9]);

  // Test case 2: Larger graph with different weights
  // This test should make sure that when the graph has various weights, the algorithm should still choose the shortest path.
  const graph2 = [
    [0, 10, 0, 0, 0, 5],
    [10, 0, 1, 0, 0, 2],
    [0, 1, 0, 4, 0, 0],
    [0, 0, 4, 0, 2, 8],
    [0, 0, 0, 2, 0, 3],
    [5, 2, 0, 8, 3, 0]
  ];
  const result2 = dijkstra(graph2, 0);
  assert.deepStrictEqual(result2, [0, 7, 9, 13, 10, 5]);

  // Test case 3: Disconnected graph
  // This test will check if unreachable nodes retain their initial distance (infinity). Meaning it will not update the distance of unvisited nodes.
  const graph3 = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 0]
  ];
  const result3 = dijkstra(graph3, 0);
  assert.deepStrictEqual(result3, [0, 1, Infinity]);

  console.log("All tests passed.");
}

runTests();
