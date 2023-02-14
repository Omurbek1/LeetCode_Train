function countSegments(s: string): number {

    let segment = 0;
    let pointer = 0;

    while (pointer < s.length) {
        let currentChar = s[pointer];

        if (currentChar !== " ") {
            segment++;
            for (let i = pointer + 1; i < s.length; i++) {
                let currentInnerChar = s[i];
                if (currentInnerChar === " ") {
                    pointer = i;
                    break;
                }
                 if(i===s.length-1){
                    pointer=s.length;
                
            }
            }
           
        }
        pointer++;
    }
    return segment;

};