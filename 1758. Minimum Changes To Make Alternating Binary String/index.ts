function minOperations(s: string): number {
let operations=0
let chars=[...s]
chars.reduce((prev,current)=>{
    if(prev===current){
        current=current==='0'?'1':'0'
        operations++
    }
    return current
})
return Math.min(operations,s.length-operations)
};