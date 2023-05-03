function average(salary: number[]): number {
    salary.sort((a, b) => Number(a) - Number(b));
    salary.pop();
    salary.shift();
    return salary.reduce((acc, curr) => acc + curr) / salary.length;
};