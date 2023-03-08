const minEatingSpeed = (piles: number[], h: number): number => {
    let maxPile = 0

    for (let pile of piles) {
        maxPile = Math.max(maxPile, pile)
    }

    let calcHrs=(speed:number):number=>{
        let hsr=0
        for(let pile of piles){
            hsr+=Math.ceil(pile/speed)
        }
        return hsr
    }

    let bs=(left:number,right:number):number=>{
        while(left<right){
            let avgSpeed=Math.floor((left+right)/2)
            let hrs=calcHrs(avgSpeed)
            if(hrs<=h) right=avgSpeed
            else left=avgSpeed+1
        }
        return left
    }
    return bs(1,maxPile)
};