/**
 * 
 * @param chars 
 * @returns 
 * function compress(chars: string[]): number {
  chars.push('End'); // add a dummy char to the end
  let times=0;
  let current=chars[0];
  while(current!=='End'){
    if(chars[0]===current){
        times++;
        chars.shift();
    }else{
        chars.push(current);
        times>1 && chars.push(...(times+''));
        times=0;
        current=chars[0];
    }
  }
  chars.shift();
  return chars.length;
};
 */

function compress(chars: string[]): number {
    chars.push('End'); // add a dummy char to the end
    let times = 0;
    let current = chars[0];
    while (current !== 'End') {
        if (chars[0] === current) {
            times++;
            chars.shift();
        } else {
            chars.push(current);
            times > 1 && chars.push(...(times + ''));
            times = 0;
            current = chars[0];
        }
    }
    chars.shift();
    return chars.length;
};