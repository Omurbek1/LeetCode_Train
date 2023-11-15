function numBusesToDestination(routes: number[][], source: number, target: number): number {
    if (source === target) {
        return 0;
    }

    const stopToRoutesMap: Map<number, number[]> = new Map();
    const visitedRoutes: Set<number> = new Set();
    const visitedStops: Set<number> = new Set();
    const queue: number[] = [];
    let steps = 0;

    for (let i = 0; i < routes.length; i++) {
        for (const stop of routes[i]) {
            if (!stopToRoutesMap.has(stop)) {
                stopToRoutesMap.set(stop, []);
            }
            stopToRoutesMap.get(stop)!.push(i);
        }
    }

    const sourceRoutes = stopToRoutesMap.get(source) || [];
    for (const route of sourceRoutes) {
        queue.push(route);
        visitedRoutes.add(route);
    }

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const currentRoute = queue.shift()!;

            for (const stop of routes[currentRoute]) {
                if (visitedStops.has(stop)) {
                    continue;
                }

                visitedStops.add(stop);

                if (stop === target) {
                    return steps + 1;
                }

                const nextRoutes = stopToRoutesMap.get(stop) || [];

                for (const nextRoute of nextRoutes) {
                    if (!visitedRoutes.has(nextRoute)) {
                        queue.push(nextRoute);
                        visitedRoutes.add(nextRoute);
                    }
                }
            }
        }

        steps++;
    }

    return -1;
}