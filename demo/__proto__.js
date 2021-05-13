// __proto__和prototype属性的关系
const arr = [1,2,3]
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__ === Object.prototype)

// 静态方法与原型方法，静态方法无法被继承，原型方法可以被继承
function Person(name, age){
    this.name = name
    this.age = age
    this.sayHello = function(){
        console.log(this.name + 'say hello')
    }
}

Person.sayHello = function(){
    console.log(this.name + 'say hello')
}

Person.prototype.intro = function(){
    console.log('%s今年%d岁了',this.name,this.age)
}

const hua = new Person('刘德华',48)
hua.sayHello() // 静态方法不能被直接实例对象调用，应该使用Person.sayHello()
Person.sayHello()
hua.intro()

