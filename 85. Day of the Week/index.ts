function dayOfTheWeek(day: number, month: number, year: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dayInt = new Date(year, month - 1, day).getDay()
    return days[dayInt]
};