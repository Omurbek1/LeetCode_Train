function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    let reflectionMap = {}

    for (let i = 0; i < manager.length; i++) {
        if (!reflectionMap[manager[i]]) reflectionMap[manager[i]] = []
        reflectionMap[manager[i]].push(i)
    }

    function dp(idx): number {
        let res = informTime[idx]
        let employeelist = reflectionMap[idx]

        if (!employeelist) return res;

        for (let i = 0; i < employeelist.length; i++) {
            res = Math.max(res, informTime[idx] + dp(employeelist[i]))
        }



        return res
    }
    return dp(headID)
};