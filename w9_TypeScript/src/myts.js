// 1.编译时类型检查
// 变量格式：变量名:类型 = 值
var username = 'laoxie';
username = '123456';
// 函数格式：function 函数名(arg:参数类型):返回类型
function getData(url, data) {
    return {};
}
getData('/login', { username: 'laoxie', psw: 123456 });
// 2. 数组
// 格式：变量:元素类型
var arr = [10, 20, 30, 40];
var namlist = ['laoxie', 'lemon', 'tiantian'];
// 3. 泛型
// 变量:类型<元素类型>
var arr2 = ['laoxie', 'lemon', 'jingjing'];
// 4. 元组
var arr3 = [10, 20, 'laoxie', 'lemon', true];
// 5. 枚举
// 索引默认从0开始,但可以指定
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Blue"] = 11] = "Blue";
})(Color || (Color = {}));
;
var colorIdx = Color.Blue;
console.log('colorIdx:', colorIdx);
var color = Color[10];
console.log('colorI:', color);
