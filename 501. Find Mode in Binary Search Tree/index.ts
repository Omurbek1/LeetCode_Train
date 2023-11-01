function findMode(root: TreeNode | null): number[] {
 let map:Map<number, number> = new Map();
 let max:number=0
 let result:number[]=[]
 let traverse=(node:TreeNode | null)=>{
    if(node===null){
        return;
    }
    let count:number=map.get(node.val)||0;
    count++;
    map.set(node.val, count);
    max=Math.max(max, count);
    traverse(node.left);
    traverse(node.right);
 }
 traverse(root);
 for(let [key,value] of map){
    if(value===max){
        result.push(key)
    }
 }
 return result

};