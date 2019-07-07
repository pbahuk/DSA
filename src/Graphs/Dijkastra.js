(function() {
  class Node {
      constructor(value, priority) {
          this.value = value;
          this.priority = priority;
      }
  }

  class PriorityQueue {
      constructor() {
          this.values = [];
      }

      length() {
          return this.values.length;
      }

      heapify() {
          console.log(this.values);
          let index = this.values.length - 1;

          while(index > 0) {
              const element = this.values[index];
              const parentIndex = Math.floor((index - 1) / 2);
              const parent = this.values[parentIndex];

              if (element.priority < parent.priority) {
                  this.values[index] = this.values[parentIndex];
                  this.values[parentIndex] = element; 
              }

              index = parentIndex;
          }
      }

      reverseHeapify() {
          let index = 0;
          const length = this.values.length;

          while(true) {
              let element = this.values[index];
              const leftChildIndex = 2 * index + 1;
              const rightChildIndex = 2 * index + 2;
              const leftChild = this.values[leftChildIndex];
              const rightChild = this.values[rightChildIndex];
              let swap;

              if (leftChildIndex < length && leftChild && element.priority > leftChild.priority) {
                  swap = leftChildIndex;
              }

              if ( 
                  (swap && leftChild.priority > rightChild.priority) ||
                  (rightChild && element.priority > rightChild.priority)
                 ) {
                  swap = rightChildIndex;        
              }

              if (swap) {
                  this.values[index] = this.values[swap];
                  this.values[swap] = element;
                  index = swap;
              } else {
                  break;
              }
          }
      }

      enqueue(value, priority) {
          const node = new Node(value, priority);
          this.values.push(node);
          if (this.values.length > 0) {
              this.heapify();        
          }   
      }

      dequeue() {
          const element = this.values[0];
          const end = this.values.pop();
          this.values[0] = end;

          if (this.values.length > 0) {
              this.reverseHeapify();    
          }
          return element;
      }
  }

  class Graph {
      constructor() {
          this.adjList = {};

          /**
              Creation of the Weighted Graph.
          */
          this.addVertex('A');
          this.addVertex('B');
          this.addVertex('C');
          this.addVertex('D');
          this.addVertex('E');
          this.addVertex('F');

          this.addEdge('A', 'B', 4);
          this.addEdge('A', 'C', 2);
          this.addEdge('B', 'E', 3);
          this.addEdge('C', 'D', 2);
          this.addEdge('C', 'F', 4);
          this.addEdge('D', 'E', 3);
          this.addEdge('D', 'F', 1);
          this.addEdge('E', 'F', 1);

          console.log(this.adjList);
      }

      addVertex(vertex) {
          if (!this.adjList[vertex]) {
              this.adjList[vertex] = [];    
          }
      }

      addEdge(v1, v2, weight) {
          const v1Edges = this.adjList[v1];
          const v2Edges = this.adjList[v2];

          v1Edges.push({node: v2, weight});
          v2Edges.push({node: v1, weight});
      }

      dijkastra(start, finish) {
          const pq = new PriorityQueue();
          const distances = {};
          const previous = {};
          const results = [];
          let 
          
          // Build the initial state.
          const vertices = Object.keys(this.adjList);
          vertices.forEach((vertex) => {
              if (vertex === start) {
                  distances[vertex] = 0;
                  pq.enqueue(vertex, 0)
              } else {
                  distances[vertex] = Infinity;    
                  pq.enqueue(vertex, Infinity);
              }
              previous[vertex] = null;
          });
          distances[start] = 0;


          // Main logic.
          while(pq.length()) {
              const minVertex = pq.dequeue().value;
              if (minVertex === finish) {
                  // We are done.
                  // Build path up.
                  console.log(distances, previous);
                  while(previous[minVertex]) {
                      console.log('If coming here');
                      results.push(minVertex);
                      minVertex = previous[minVertex];
                  }
                  break;
              }
              if (minVertex || distances[minVertex] !== Infinity) {
                  const edges = this.adjList[minVertex];
                  edges.forEach(neighor => {
                      // [{node: B, weight: 10}, {node: C, weight: 10}]
                      // Calculating the distances to neighoring nodes.
                      let candidate = distances[minVertex] + neighor.weight;
                      if (candidate < distances[neighor.node]) {
                          // Updating the distances.
                          distances[neighor.node] = candidate;

                          // Changing the path to the node.
                          previous[neighor.node] = minVertex;

                          // Enqueue in the priority queue
                          pq.enqueue(neighor.node, candidate);
                      }
                  });
              }
          }
          return results;
      }
  }

  const graph = new Graph();
  graph.dijkastra('A', 'F');
})();