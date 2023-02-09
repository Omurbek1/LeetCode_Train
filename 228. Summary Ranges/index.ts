
function summaryRanges(nums: number[] ):string[]{
    let res = []
    
    for (let end = 0, start = 0; end < nums?.length; end++, start = end){
        while (nums[end] === nums[end + 1] - 1) {
            end++
        }
        if (end !== start) {
            res.push(nums[start]+'->'+nums[end] as never)
        } else {
            res.push("" + nums[end] as never);
        }
        
    }
    return res

};