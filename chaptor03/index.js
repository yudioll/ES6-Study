// let [a,b,c]=[1,2,3]
// console.log(a) //1
// console.log(b) //2
// console.log(c) //3

// let [a,...b]=[1,23,4]
// console.log(a) //1
// console.log(b) //[23,4]
// const [foo1]=[]
// console.log(foo1)

// const [bar,foo2]=[1]
// console.log(foo2)
// const [x,y]=[1,2,3]
// console.log(x)//1
// console.log(y)//2

// const [foo]=1
// console.log(foo)//1 is not iterable

// const [a,b,c] = new  Set([1,2,3])
// console.log(a) //1
// console.log(b) //2
// console.log(c) //3

// const [foo=1]=[2]
// console.log(foo)//2
// const [foo1=3]=[undefined]
// console.log(foo1)//3

// const [foo=1]=[null]
// console.log(foo)//null

// let {foo,bar}={foo:1,bar:2}
// console.log(foo)//1
// console.log(bar)//2

// let {foo:baz,bar}={foo:1,bar:2}
// console.log(baz)//1

var obj={
    p:[
        'hello',
        {
            name:'aaa'
        }
    ]
}
let {p:[a,{name}]}=obj
// console.log(p)//报错
console.log(a)//hello
console.log(name)//aaa

