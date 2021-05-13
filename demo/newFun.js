// 手写一个模拟一个newFun
const Person = function(name) {
    this.name = name
}

const p = new Person('刘德华')
console.log(p.name)

const newFun = function(...args) {
    // 取出第一个参数，即构造函数
    const constructor = args.shift()

    // 创建一个空对象，并且将这个对象的__proto__ 指向constructor的prototype
    const obj = Object.create(constructor.prototype)

    // 执行构造函数，得到构造函数的返回结果，并且将constructor的this指向新构建的对象
    const result = constructor.apply(obj, args)

    // 如果构造函数返回的结果是一个object的话，则返回这个结果，否则返回创建的obj
    return (typeof result === 'object' && result !== null) ? result : obj

}

const hua = newFun(Person,'刘德华')
console.log(hua.name)
console.dir(hua)
console.log(p.__proto__ === hua.__proto__)
