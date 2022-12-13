function findRestaurant(list1: string[], list2: string[]): string[] {
    let sum = Infinity
    const map = list1.reduce((acc, str, index) => {
        acc[str] = index
        return acc
    }, {})
    for (let i = 0; i < list2.length; i++) {
        const index1 = map[list2[i]]
        if (index1 >= 0 && index1 + i < sum) {
            sum = index1 + i
        }
    }
    const result = []
    for (let i = 0; i < list2.length; i++) {
        const index1 = map[list2[i]]
        if (index1 >= 0 && index1 + i === sum) {
            result.push(list2[i])
        }
    }
    return result
};