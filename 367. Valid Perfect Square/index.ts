const isPerfectSquare = (num: number): boolean => {
    let left = 1;
    let right = num;
    while (left <= right) {

        const mid = left + Math.floor((right - left) / 2)
        if (mid * mid == num) {
            return true
        }else if(mid*mid>num){
            right-=mid
        }else{
            left+=1
        }
    }
    return false;

};