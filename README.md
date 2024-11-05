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

The big $\Theta$ complexity of my implmentation is big $\Theta(|V^2|)$. Since there are two main operations, finding the minimum ditance and updating the distances to the neighboring nodes. For each iteration, this implmentation searches through all vertices in order to find the unvisited node that has the smallest distance. This takes $\Theta (|V|)$ time, and the search itself is repeated $|V|$ times. With these two complexities we get $\Theta(|V^2|)$. Next we have to look at the complexity of updating the distances to neighboring nodes. This also has a $\Theta (|V|)$ time for each iteration. Since both operations have a complexity of $\Theta (|V^2|)$, this is how we came to the conclusion for the overall complexity. My implementation would be best with a dense graph but would be considered inefficient for very large graphs. 

I referenced the repository dijkstra-s-algorithm-howardthegr8one to get an idea of what the implmentation and test code should look like. I also referenced https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/ to get a further explination of what Dijkstra's algorithm was. Referenced class videos and slides as well (slides 37-43). Also referenced https://docs.github.com/en/actions/writing-workflows/quickstart to figure out how to automate my tests

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
