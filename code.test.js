const assert = require("assert");
const dijkstra = require("./path/to/dijkstra_function"); // Update with the actual path

function runTests() {
  // Test case 1: Simple graph
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
