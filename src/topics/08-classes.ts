export class Person {

    constructor(
        public name: string, 
        private address: string = 'No Address'
    ) {
        this.name = name;
        this.address = address;
    }
    

}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, '1000 Madison Ave');
//     }
// }

export class Hero {

   
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName, '1000 Madison Ave');
    }
}

const ironMan = new Hero("Ironman", 45, 'Tony', new Person('Tony Stark', '1000 Madison Ave'));

console.table(ironMan); // Output: 1000 Madison Ave
// console.log(ironMan.address); // Error: Property 'address' is private and only accessible within class 'Person'.