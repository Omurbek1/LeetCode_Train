interface ITimeStampValue {
    value: string,
    time: number
}

class TimeMap {
    map: Map<string, ITimeStampValue[]> = new Map();

    constructor() { }

    set(key: string, value: string, timestamp: number): void {
        let timeStamps: ITimeStampValue[] | undefined = this.map.get(key);

        const timeStamp: ITimeStampValue = { value: value, time: timestamp };

        if (!timeStamps) {
            timeStamps = [timeStamp];
            this.map.set(key, timeStamps);
        }
        else {
            timeStamps.push(timeStamp);
        }
    }

    get(key: string, timestamp: number): string {
        const timeStamps: ITimeStampValue[] | undefined = this.map.get(key);

        if (!timeStamps)
            return '';

        return this.binarySearchForTimeStamp(timestamp, timeStamps);
    }

    private binarySearchForTimeStamp(timestamp: number, timestamps: ITimeStampValue[]): string {
        let left: number = 0;
        let right: number = timestamps.length - 1;
        let middle: number = Math.floor((left + right) / 2);
        let closest: number | null = null;

        while (left <= right) {
            if (timestamps[middle].time === timestamp) {
                return timestamps[middle].value;
            }
            else if (timestamps[middle].time < timestamp) {
                closest = middle;
                left = middle + 1;
            }
            else {
                right = middle - 1;
            }

            middle = Math.floor((left + right) / 2);
        }

        return closest === null ? '' : timestamps[closest].value;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */