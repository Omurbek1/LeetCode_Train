function multiply(num1: string, num2: string): string {

    if(num1 === '0' || num2 === '0') return '0'
   let resultArr:number[]=Array(num1.length+num2.length).fill(0);
   const addToResult=(num,shift):void=>{
       const numstr=num.toString()
       let j=shift;
       for(let i=numstr.length-1;i>=0;i--){
           resultArr[j]+=numstr.charCodeAt(i)-48;
           j++;
       }
   }
   let shift1=-1

  for(let i1=num1.length;i1>=0;i1-=7){
    const n1=Number(num1.substring(i1-7,i1))
    shift1++;
    let shift2=-1;
    for(let i2=num2.length;i2>=0;i2-=7){
      const n2=Number(num2.substring(i2-7,i2))
      shift2++;
   addToResult(n1*n2,(shift1+shift2)*7)
    }
  }

  for(let i=0;i<resultArr.length-1;i++){
    resultArr[i+1]+=Math.floor(resultArr[i]/10);
    resultArr[i]=resultArr[i]%10;
  }

  while(resultArr[resultArr.length-1]===0){
    resultArr.pop();
  }
  for(let i=0;i<resultArr.length;i++){
    resultArr[i]+=48
  }
  return String.fromCharCode(...resultArr.reverse())

};