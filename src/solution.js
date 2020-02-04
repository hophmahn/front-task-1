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

const findLowestCostNode = function(costs, processed) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let node in costs) {
        const cost = costs[node];

        if (cost < lowestCost && !processed.has(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    
    return lowestCostNode;
}

const calculateAndUpdateNodeCostsAndParents = function({ node, costs, parents, graph }) {
    const cost = costs[node];
    const neighbors = graph[node];

    for (let neighbor in neighbors) {
        const newCost = cost + neighbors[neighbor];

        if (!costs[neighbor]) {
            costs[neighbor] = newCost;
            parents[neighbor] = node;
        } else if (costs[neighbor] > newCost) {
            costs[neighbor] = newCost;
            parents[neighbor] = node;
        }
    }
}

const solution = function(graph, start, finish) {
    const { costs, parents } = prepareCostsAndParents(graph, start, finish);
    const processed = new Set();
    const result = {};
    
    let node;
    do {
        calculateAndUpdateNodeCostsAndParents({ node, costs, parents, graph });
        processed.add(node);
        node = findLowestCostNode(costs, processed);
    }
    while(node)
}
