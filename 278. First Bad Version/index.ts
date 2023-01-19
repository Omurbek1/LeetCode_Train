var solution = function (isBadVersion: any) {

    return function (n: number): any {
        let start = 0
        let end = n
        while (start < end) {
            const middle = Math.floor((start + end) / 2)
            if (isBadVersion(middle)) {
              
                end = middle
            } else {
                start=middle+1
            }
        };
        return end
    };
    
  
}