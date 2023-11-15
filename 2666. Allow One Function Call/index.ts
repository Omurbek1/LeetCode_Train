type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {


    return function (...args) {
      if(typeof fn === 'function'){
        const result=fn(...args)
        fn=()=>undefined
        return result
      }

    };
}