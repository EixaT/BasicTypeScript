
function addNumbers(a: number, b: number): number {
   return a+b;
    
}

const addNumbeersArrow = (a: number, b: number): string => {
    return `a+b = ${a+b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const result = addNumbers(1, 2);
const result2 = addNumbeersArrow(1, 2);
const multiplyResult = multiply(5);

console.log({result, result2, multiplyResult});



// const healCharacter = (character: Character, amount: number ) => {
//     character.pv += amount;

// }


export {};