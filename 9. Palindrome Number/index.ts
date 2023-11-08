function isPalindrome(x :number) :boolean {
    if(x<0)return false;
    let stroka=x.toString();
    let left=0;
    let right=stroka.length-1
while(left<right){
    if(stroka[left]!==stroka[right]) return false;
    left++;
    right--
}    
return true
}