function findDifferentBinaryString(nums: string[]): string {
    const n = nums.length;
    const seen=new Set(nums)
    for(let i=0;i<i<<n;i++) {
        const b=i.toString(2).padStart(n,'0')
        if(!seen.has(b)){
            return b
        }
    }
    return ''

};