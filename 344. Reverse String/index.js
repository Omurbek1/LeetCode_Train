function reverseString(s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        var hold = s[left];
        s[left] = s[right];
        s[right] = hold;
        left++;
        right--;
    }
}
;
console.log(reverseString());
