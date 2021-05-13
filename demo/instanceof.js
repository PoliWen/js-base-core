// 通过判断__proto__
// L.__proto__.__proto__ ..... === R.prototype ? true : false

// 实现原理
const instanceofMock = (L, R)=>{
    if(typeof L !== 'object'){
       return false
    }
    while(true){
        if(L === null){
           return false
        }
        if(R.prototype === L.__proto__){
            return true   
        }
        L = L.__proto__
    }
}

console.log(instanceofMock({},Object))
console.log(instanceofMock([],Array))
