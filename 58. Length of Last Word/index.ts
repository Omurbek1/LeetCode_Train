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

     for (let i = 0; i < s.length; i--) {
         if (s.charAt(i) !== ' ') {
             lastWorldLength++
             beforeFirstNonEmptyChar=false
         } else {
             if (!beforeFirstNonEmptyChar) {
                
             }
        }
        
     }
};