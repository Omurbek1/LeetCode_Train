const majorityElement=(nums: number[]): number=> {
    let obj={};
    let count=0;
    let max=0;

    for(let i of nums){
        if(!obj[i]){
            obj[i]=1
        }else{
            obj[i]++
        }
    }

    for(let j in obj){
        if(obj[j]>count){
count=obj[j];
max=j as never;
        }
    }
return max
};