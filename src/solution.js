const prepareCostsAndParents = function(graph, start, finish) {
    const costs = { [finish]: Infinity };
    const parents = { [finish]: null };

    for (let key in graph[start]) {
        const cost = graph[start][key];
        costs[key] = cost;
        parents[key] = start;
    }

    return {
        costs,
        parents
    }
}

const solution = function(graph, start, finish) {
    const { costs, parents } = prepareCostsAndParents(graph, start, finish);
}
