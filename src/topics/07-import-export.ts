import { type Product, taxCalculation } from "./06-functions-destructure";


const shoppingCart: Product[] = [
    {
        description: 'Nokia A1',
        price: 150
    },
    {
        description: 'Table',
        price: 350
    },
    {
        description: 'Chair',
        price: 200
    }
];


const [total, taxes] = taxCalculation({ tax: 0.15, products: shoppingCart });

console.log('Total:', total);
console.log('Tax:', taxes);