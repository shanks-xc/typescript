# 学习 typescript 记载

> 安装 typescript

```
npm i typescript -g
// 查看版本号
tsc -v
// 编译 tsc xxx.ts
```

> example

- 声明一个类

```
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
```

> 基础类型:boolean number string array enum(枚举) any(等于不做语法检查) void(没有任何值) undefined null  never
```

```
