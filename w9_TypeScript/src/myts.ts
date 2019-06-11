// 1.编译时类型检查
// 变量格式：变量名:类型 = 值
let username:string = 'laoxie';

username = '123456';


// 函数格式：function 函数名(arg:参数类型):返回类型
function getData(url:string,data:object):object{
    return {

    }
}

getData('/login',{username:'laoxie',psw:123456})


// 2. 数组
// 格式：变量:元素类型
let arr:number[] = [10,20,30,40];
let namlist:string[] = ['laoxie','lemon','tiantian'];


// 3. 泛型
// 变量:类型<元素类型>
let arr2:Array<string> = ['laoxie','lemon','jingjing'];

// 4. 元组
let arr3:[number,number,string,string,boolean] = [10,20,'laoxie','lemon',true]


// 5. 枚举
// 索引默认从0开始,但可以指定
enum Color {Red=5, Green=10, Blue=11};

let colorIdx:Color = Color.Blue;console.log('colorIdx:',colorIdx)
let color:string = Color[10];console.log('colorI:',color)
