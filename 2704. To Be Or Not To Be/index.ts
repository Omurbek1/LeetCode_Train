type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const throwError = (errorStr) => {throw new Error(errorStr)};

    return {
        toBe: (val2: any) => val === val2 || throwError('Not Equal'),
        notToBe: (val2: any) => val !== val2 || throwError('Equal'),
    };	
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */