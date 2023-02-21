const isPerfectSquare = (num: number): boolean => {
    //!1) check if num is a perfect square
    let left = 1;
    let right = num;
    //2) Строим цикл
    while (left <= right) {
//3)проверяем переменные
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