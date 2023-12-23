function isPathCrossing(path: string): boolean {
    let x = 0, y = 0
    const map = new Map()
    map.set(`${x},${y}`, 1)
    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case 'N':
                y++
                break
            case 'S':
                y--
                break
            case 'E':
                x++
                break
            case 'W':
                x--
                break
        }

        const point = map.get(`${x},${y}`)
        if (point) {
            return true
        }
        map.set(`${x},${y}`, 1)
    }

    return false
};