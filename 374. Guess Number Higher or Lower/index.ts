/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let start = 1;
  let end = n;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (guessNumber(mid) == 0) {
      return mid;
    }else if(guessNumber(mid)==1){
start=mid+1;
    }else if(guessNumber(mid)==-1){
        end=mid-1;
    }
  }
  return mid
}
