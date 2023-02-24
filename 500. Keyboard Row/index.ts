function findWords(words: string[]): string[] {
    return words.filter(w => wordCheck(w));
};

const wordCheck=(word:string)=>{
    let row=0;
    let row1=['q','w','e','r','t','y','u','i','o','p'];
    let row2=['a','s','d','f','g','h','j','k','l'];
    let row3=['z','x','c','v','b','n','m'];
    let rowCheck=0;
    for(let i=0;i<word.length;i++){
        if(row1.includes(word[i].toLowerCase())){
            row=1;
        }
        else if(row2.includes(word[i].toLowerCase())){
            row=2;
        }
        else if(row3.includes(word[i].toLowerCase())){
            row=3;
        }
        if(rowCheck===0){
            rowCheck=row;
        }
        else if(rowCheck!==row){
            return false;
        }
    }
    return true;
}