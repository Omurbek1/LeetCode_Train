function sortBy(arr: any[], fn: Function): any[] {
const swap=(a,b)=>{
  return (fn(a)<fn(b)?-1:1)
}
return arr.sort(swap)

};
