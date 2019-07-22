class Cat {
  name: string
  age: number
  doing: object
  constructor(name, age) {
    this.name = name
    this.age = age
    console.log(`${this.name} is ${this.age} years old`)
  }
}

let Animal = new Cat('luck', '1')
console.log(Animal) // Cats { name: 'luck', age: '1' }
