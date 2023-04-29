/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
    const isSimilar = (word1, word2) => {
        let differentPositionCount = 0
        for (let i = 0; i < word1.length; i++) {
            if (word2[i] !== word1[i]) {
                differentPositionCount += 1
            }

            if (differentPositionCount > 2) {
                return false
            }
        }

        return differentPositionCount === 2
    }

    // O(m) O(m^2)
    const similarWordMap = new Map(strs.map(word => [word, new Set()]))

    // O(m ^ 2 n)
    // fill up the map
    for (let i = 0; i < strs.length - 1; i++) {
        for (let j = i + 1; j < strs.length; j++) {
            if (isSimilar(strs[i], strs[j])) {
                similarWordMap.get(strs[i]).add(strs[j])
                similarWordMap.get(strs[j]).add(strs[i])
            }
        }
    }


    // O(m)
    // traverse through the graph and count isolated sub graph
    const traversed = new Set()
    let count = 0

    // O(m) O(m)
    for (let word of strs) {
        if (traversed.has(word)) continue
        // if ok, then this is a new subgraph
        count += 1
        // mark all the connected nodes
        // DFS, stack
        // O(m)
        const stack = [word]
        while (stack.length > 0) {
            const top = stack.pop()
            traversed.add(top)

            // check its connect words
            for (let next of similarWordMap.get(top)) {
                if (!traversed.has(next)) {
                    stack.push(next)
                }
            }
        }
    }

    return count
};