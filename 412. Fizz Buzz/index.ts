function fizzBuzz(n: number): string[] {

    for (let i = 1; i <= n; i++){
        if (i % 3 && i %5) {
            console.log('FizBuss')
            
        } else if (i % 5) {
            console.log('BUSS')
        }
        else {
            console.log(i);
            
        }
    }

};