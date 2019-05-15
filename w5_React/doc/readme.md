## day5-2

* React （MVC中的view）


## day5-3
* 介绍react
    * Virtual DOM
    * View + Router + Redux
    * JSX -> React.creatElement(type,attr,children) => Object{type:'div',props:{id:'box',className:'box'},children[]}
        * {} | <>
        * class -> className
        * for   -> htmlFor
        * tabindex -> tabIndex
        * autofocus -> autoFocus
        * onclick -> onClick
        * ....
* 渲染
    * ReactDOM.render(template,target)
    <div>
        <h1>xxx</h1>
        <p>aaaa</p>
    </div>

    React.createElement('div',null,[
        React.createElement('h1',null,'xxx'),
        React.createElement('p',null,'aaaa')
    ]); //返回虚拟DOM

    <!-- 虚拟DOM -->
    {type:'div',children[{
        type:'h1',
        children:'xxx'
    },{
        type:'p',
        children:'aaa'
    }]}

    ===>diff算法<===   差异化对象{type:'p',children:''}

    {type:'div',children[{
        type:'h1',
        children:''
    },{
        type:'p',
        children:''
    }]}

### 组件
* 函数组件（UI组件，受控组件，无状态组件）
    * 纯函数
    * 在函数参数中获取props
* 类组件（容器组件，非受控组件，有状态组件）
    * state
    * 必须有render方法
    * this指向
        * 箭头函数
    * 通过this.props获取

PS:能用函数组件就不要用类组件

### props VS state
* props: 外部传入
    * 无法修改
* state: 类组件私有
    * 修改方式：this.setState()

PS: props和state的修改都会刷新视图

* 强制刷新：this.forceUpdate(callback)
