class TimeLimitedCache {
    private map: Map<number, {
        value: number
        time: any
    }>


    constructor() {
        this.map = new Map()
    }

    set(key: number, value: number, duration: number): boolean {
        const had = this.map.has(key)
        if (had) {
            const { time } = this.map.get(key)
            clearTimeout(time)
        }
        const del = setTimeout(() => {
            this.map.delete(key)
        }, duration)
        this.map.set(key, { value, time: del })
        return had

    }

    get(key: number): number {
        return this.map.get(key)?.value ?? -1

    }

    count(): number {
        return this.map.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */