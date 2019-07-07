(function() {
  class Graph {
    constructor() {
      this.adjList = {};

      /**
              Creation of the graph.
          */
      this.addVertex("A");
      this.addVertex("B");
      this.addVertex("C");
      this.addVertex("D");
      this.addVertex("E");
      this.addVertex("F");

      this.addEdge("A", "B");
      this.addEdge("A", "C");
      this.addEdge("B", "D");
      this.addEdge("C", "E");
      this.addEdge("D", "E");
      this.addEdge("D", "F");
      this.addEdge("E", "F");

      console.log(this.adjList);
    }

    addVertex(vertex) {
      if (!this.adjList[vertex]) {
        this.adjList[vertex] = [];
      }
    }

    addEdge(v1, v2) {
      const v1Edges = this.adjList[v1];
      const v2Edges = this.adjList[v2];

      v1Edges.push(v2);
      v2Edges.push(v1);
    }

    DFS(start) {
      const results = [];
      const visited = {};

      const DFShelper = vertex => {
        if (!vertex) return;

        results.push(vertex);
        visited[vertex] = true;

        const edges = this.adjList[vertex];
        for (let i = 0; i < edges.length; i++) {
          if (!visited[edges[i]]) {
            DFShelper(edges[i]);
          }
        }
      };

      DFShelper(start);
      return results;
    }

    DFSInterative(start) {
      const results = [];
      const visited = {};

      // Setting up of data.
      const stack = [start];
      visited[start] = true;

      while (stack.length) {
        const vertex = stack.pop();
        results.push(vertex);

        const edges = this.adjList[vertex];
        for (let i = 0; i < edges.length; i++) {
          if (!visited[edges[i]]) {
            // Before it is pushed in the stack it is visited. Check the forEach version.
            visited[edges[i]] = true;
            stack.push(edges[i]);
          }
        }
      }

      return results;
    }

    BFS(start) {
      const results = [];
      const visited = {};

      // Setting up the data.
      const q = [start];
      visited[start] = true;

      while (q.length) {
        const vertex = q.shift();
        results.push(vertex);

        const edges = this.adjList[vertex];
        edges.forEach(neighor => {
          if (!visited[neighor]) {
            visited[neighor] = true;
            q.push(neighor);
          }
        });
      }

      return results;
    }
  }

  //           A
  //        /    \
  //       B      C
  //       |      |
  //       D ---- E
  //        \    /
  //          F

  const graph = new Graph();
  console.log(graph.DFS("A"));
  console.log(graph.DFSInterative("A"));
  console.log(graph.BFS("A"));
})();
