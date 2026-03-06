function classDecorator<T extends {new (...args:any[]): {}}>(
    contructor: T

) {
    return class extends contructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    public myMethod(): void {
        console.log('Hello from SuperClass');
    }

}


console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);

