function sortVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const sArr = s.split('');
    const sortedVowels = sArr.filter((c)=>vowels.has(c)).sort();

    let result=''
    let vowelIndex=0
    for(let i=0;i<sArr.length;i++){
        if(vowels.has(s[i])){
            result+=sortedVowels[vowelIndex++]
        }else{
            result+=s[i]
        }
    }
    return result
};