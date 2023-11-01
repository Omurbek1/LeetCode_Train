function permute(nums: number[]): number[][] {
    const result: number[][] = []
    const visited: boolean[] = []

    const dfs = (current: number[]) => {
        if (current.length === nums.length) {
            result.push([...current])
            return
        }
        for(let i=0;i<nums.length;i++){
            if(visited[i]){
                continue
            }
            visited[i] = true
            current.push(nums[i])
            dfs(current)
            current.pop()
            visited[i] = false
        }
    }
    dfs([])
    return result

};