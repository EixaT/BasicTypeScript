export interface Product {
    description: string;
    price: number;
}
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 150
// }

// const table: Product = {
//     description: 'Table',
//     price: 350
// }

// const shoppingCart = [phone, table];
// const tax = 0.15;

export function taxCalculation(options: TaxCalculationOptions) : [number, number] {
    const { tax, products } = options;
    
    let total = 0;
    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax ];

}

// const [total, taxes] = taxCalculation({ 
//     products: shoppingCart, 
//     tax 
// });

// console.log('Total:', total);
// console.log('Tax:', taxes);

