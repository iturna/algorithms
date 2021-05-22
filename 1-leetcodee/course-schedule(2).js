/**
 * https://leetcode.com/problems/course-schedule/
 * 
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const g = new graph(numCourses, prerequisites);
    
    const state = [];
    
    // initially all vertices will be 0; while processing -1; after processing 1;
    for (let i = 0; i < numCourses; i++) {
        state[i] = 0;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!state[i]) {
            if (detectCycle(g, state, i)) {
                return false;
            }
        }
    }
    return true;
};

function detectCycle(g, state, vertex) {
    state[vertex] = -1;
    
    const edges = g.adjacencyList[vertex];
    
    for (let i = 0; i < edges.length; i++) {
        const next = edges[i];
        if (state[next] === -1) {
            return true;
        }
        
        if (state[next] === 0 && detectCycle(g, state, next)) {
            return true;
        }
    }
    
    state[vertex] = 1;
    return false;
}

class graph {
    constructor(vertices, edges) {
        const list = {};
        
        for (let i = 0; i < vertices; i++) {
            list[i] = [];
        }
        
        for (let i = 0; i < edges.length; i++) {
            const [source, dest] = edges[i];
            list[source].push(dest);
        }
        
        this.adjacencyList = list;
    }
}

canFinish(2, [[0,1],[1,0]]);