// I referenced dijkstra-s-algorithm-howardthegr8one-1 test code to see a layout of a written test case

const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

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

  // Test case 2: Disconnected graph
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