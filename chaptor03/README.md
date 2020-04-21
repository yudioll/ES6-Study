# 变量的解构赋值
## 数组的解构赋值
- 以前第一变量直接赋值，现在可以通过解构来定义变量
```js
    let [a,b,c]=[1,2,3]
    console.log(a) //1
    console.log(b) //2
    console.log(c) //3
```
- 相当于模式匹配,还有如下类型
```js
    let [a,...b]=[1,23,4]
    console.log(a) //1
    console.log(b) //[23,4]
```
- 如果解构不成功，值为undefined
```js
    const [foo1]=[]
    console.log(foo1)

    const [bar,foo2]=[1]
    console.log(foo2)
```
- 还有一种情况就是不完全解构
```js
    const [x,y]=[1,2,3]
    console.log(x)//1
    console.log(y)//2
```
- 如果解构模式不匹配,或者=右边不是可以遍历的对象就会出错
```js
    const [foo]=1
    console.log(foo)//TypeError 1 is not iterable
```
- 对于set解构也可以使用解构
```js
    const [a,b,c] = new  Set([1,2,3])
    console.log(a) //1
    console.log(b) //2
    console.log(c) //3
```
- 事实上只要某种数据解构具有Iterator接口，就可以采用数组的形式解构赋值

- 默认值
```js
    const [foo=1]=[2]
    console.log(foo)//2
    const [foo1=3]=[undefined]
    console.log(foo1)//3
```
- es6内部按照严格模式将值与undefined判断只要不相等就是取默认值
```js
    const [foo=1]=[null]
    console.log(foo)//null
```
- null 不严格等于undefined

## 对象的解构赋值
```js
    let {foo,bar}={foo:1,bar:2}
    console.log(foo)//1
    console.log(bar)//2
```
- 与数组不同的是，解构的变量必须与属性同名，如果变量名与属性名不一致必须写成下面这样
```js
    let {foo:baz,bar}={foo:1,bar:2}
    console.log(baz)//1
```
- 嵌套模型的解构
```js
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
```
- 在这里p是模式
