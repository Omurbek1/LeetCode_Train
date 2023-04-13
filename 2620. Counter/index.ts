let createCounter=(n)=>{
    let count =0;
   return function (){
    const result=count
    count++;
    return result
   }
}