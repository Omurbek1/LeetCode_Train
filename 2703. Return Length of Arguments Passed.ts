function argumentsLength(...args: any[]): number {
    let count=0
    for(let i=0;i<args.length;i++){
        count++

    }
    return count

};

/**
 * argumentsLength(1, 2, 3); // 3
 */
