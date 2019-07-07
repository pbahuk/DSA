(function() {
  class Graph {
    constructor() {
      this.adjList = {};
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

    removeEdge(v1, v2) {
      this.adjList[v1] = this.adjList[v1].filter(vertex => vertex !== v2);
      this.adjList[v2] = this.adjList[v2].filter(vertex => vertex !== v1);
    }

    removeVertex(v) {
      // Other way: Pop all items of the vertex and removeEdge for each entry.
      for (let key in this.adjList) {
        if (key !== v) {
          const edges = this.adjList[key];
          this.adjList[key] = this.adjList[key].filter(vertex => vertex !== v);
        }
      }
      delete this.adjList[v];
    }
  }

  const graph = new Graph();
  graph.addVertex("Tokyo");
  graph.addVertex("London");
  graph.addVertex("Delhi");
  graph.addEdge("Tokyo", "London");
  graph.addEdge("Tokyo", "Delhi");
  graph.addEdge("Delhi", "London");
  console.log(graph);
  graph.removeVertex("Delhi");
  console.log(graph);
})();
