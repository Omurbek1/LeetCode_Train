interface Station {
    name: string;
    time: number;
}

class UndergroundSystem {
    private checkIns: Map<number, Station> = new Map();
    private travels: Map<string, { totalTime: number; count: number }> = new Map();

    checkIn(id: number, stationName: string, time: number): void {
        this.checkIns.set(id, { name: stationName, time });
    }

    checkOut(id: number, stationName: string, time: number): void {
        const checkInStation = this.checkIns.get(id);
        const travelKey = `${checkInStation.name}-${stationName}`;
        const travelTime = time - checkInStation.time;

        if (this.travels.has(travelKey)) {
            const travel = this.travels.get(travelKey);
            travel.totalTime += travelTime;
            travel.count++;
        } else {
            this.travels.set(travelKey, { totalTime: travelTime, count: 1 });
        }

        this.checkIns.delete(id);
    }

    getAverageTime(startStation: string, endStation: string): number {
        const travelKey = `${startStation}-${endStation}`;
        const travel = this.travels.get(travelKey);
        return travel.totalTime / travel.count;
    }
}
