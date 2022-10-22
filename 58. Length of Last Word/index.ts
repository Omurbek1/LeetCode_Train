/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLastWord = function(s) {
     let lastWorldLength = 0
     let beforeFirstNonEmptyChar = true
     
     if (s.length === 0) {
         return lastWorldLength
     }

     for (let i = s.length-1; i >=0; i--) {
         if (s.charAt(i) !== ' ') {
             lastWorldLength++
             beforeFirstNonEmptyChar=false
         } else {
             if (!beforeFirstNonEmptyChar) {
                 break;
             }
        }
        
     }
     return lastWorldLength
};


console.log('Эн акыркы создун жалпы узундугу'+' '+lengthOfLastWord('My Nmae Omurbek'))