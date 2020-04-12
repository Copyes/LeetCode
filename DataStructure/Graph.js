class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
      this.adj[i].push('');
    }
  }

  addEdges(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    for (let i = 0; i < this.vertices; ++i) {
      console.log(i + '->');
      for (let j = 0; j < this.vertices; ++j) {
        if(this.adj[i][j] !== undefined) {
          console.log(this.adj[i][j] + ' ');
        }
      }
    }
  }
}

var g = new Graph(5); 
g.addEdges(0,1); 
g.addEdges(0,2); 
g.addEdges(1,3); 
g.addEdges(2,4); 
g.showGraph();