class NestedIterator {
    flatList:number[];
    constructor(nestedList) {
		this.flatList = [];
        const stack = [...nestedList];
        while(stack.length){
            const next = stack.pop();
            if(next.isInteger()){
                this.flatList.push(next.getInteger());
            }else{
                stack.push(...next.getList());
            }
        }
        
    }

    hasNext(): boolean {
		return this.flatList.length > 0;
    }

	next(): number {
		return this.flatList.pop();
    }
}