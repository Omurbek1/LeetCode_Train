function findContentChildren(g: number[], s: number[]): number {
    let contentcgildren = 0;

    const sortedG=g.sort((a,b)=>a-b);
    const sortedS=s.sort((a,b)=>a-b);

    for(let i=g.length-1;i>=0;i--){
        if(g[i]<=s[s.length-1]){
            contentcgildren++;
            s.pop()
        }
    }

    return contentcgildren;
};