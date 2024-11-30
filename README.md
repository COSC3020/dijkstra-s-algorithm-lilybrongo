# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The big $\Theta$ complexity of my implementation would be $\Theata(|V^2|)$. Since there are two main perations, finding the minimum distance and then making sure to update the the distances to the neighboring nodes, this takes $\Theta|V|$. For each iteration the algorithm needs to scan all nodes in order to find the unvisited nodes with the smallest distance. For the second step we need to update the distances, this means that the algorithm will iterate through all the possible neighboring nodes. This will also take $\Theta|V|$. After combining these two processes we get big $Theta|V^2|$ since I decided to work with a matrix instead of other versions that used a priority queue, the matrix size is $V x V$ 



I referenced the repository dijkstra-s-algorithm-howardthegr8one to get an idea of what the implmentation and test code should look like. I also referenced https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/ to get a further explination of what Dijkstra's algorithm was. Referenced class videos and slides as well (slides 37-43). Also referenced https://docs.github.com/en/actions/writing-workflows/quickstart to figure out how to automate my tests
