export function whatsMyType<T>(argument: T): T {
    
    
    return argument;
}


let amIString: string = whatsMyType<string>('Hello World');
let amINumber: number = whatsMyType<number>(1);
let amIArray: number[] = whatsMyType<number[]>([1, 2, 3]);



console.log(amIString.split(' '));
console.log(amINumber.toFixed(2));
console.log(amIArray.join('-'));


