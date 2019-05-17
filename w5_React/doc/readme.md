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

## day5-4

### 复习
* 组件
    * 函数组件
    * 类组件（容器组件）
        * class
        * extends React.Component
            * super
        * state
            * 状态提升
            * this.setState()

* 组件通讯
    * props


* state VS props

* 事件
    * 事件名使用驼峰：onClick, onKeyDown
    * 事件处理函数
        * this
            * bind()
            * 箭头函数
        * event
            * 在最后一个参数传入事件处理函数

### 知识点
* context
    * 要使用context，必须为类组件
    * 旧版
        1. 父组件定义数据
        2. 父组件校验context属性
        3. 子组件校验context属性
        4. 子组件通过this.context获取共享数据
    * 新版
        * let Mycontext = React.createContext(default)
        * <Mycontext.Provider value="xxx">
        * 子组件设置静态属性：TodoItem.contextType = MyContext
        * this.context获取
    

* 属性校验


## day5-5

### 复习
* 组件通讯
    * props
        * 传递事件处理函数(谁的数据谁修改)
        * children
    * state状态提升
    * context
        * 旧版（实验性）
        * 新版
            1. let xxx = React.createContext(default)
            2. 父组件：<xxx.Provider vaule="xxx">
            3. 子组件设置静态属性contextType = xxx
            3. 子组件：
            ```jsx
                <xxx.Consumer>
                    {
                        value=>{
                            // 这里的value就是Provider提供的value值
                        }
                    }
                </xxx.Consumer>
            ```
* 生命周期：init -> mounting -> updating -> unMounting
    1. 初始化：constructor()
    2. 挂载
        * componentWillMount
        * componentDidMount
    3. 更新：props,state
        ?* props更新：componentWillReceiveProps
        * shouldComponentUpdate
        * componentWillUpdate
        * componentDidUpdate
    4. 卸载
        * componentWillUnmount

* 路由（RR4）：一切皆组件
    * 安装
        * react-router
        * react-router-dom 
    * 使用
        * <Route/>
            * path
            * component
            * render
        * <Switch/>
        * <HashRouter/> or <BrowserRouter/>
        * <Redirect>
            * from
            * to

    * 导航
        * 声明式导航：
            * <Link/>
            * <NavLink/>
                * to
                * activeClassName
                * activeStyle
        * 编程式导航

* 动态路由
* 嵌套路由

* React内联样式（推荐）
    * 必须使用对象
    * 属性名必须使用小驼峰

### 知识点
* 编程式导航
* 高阶组件
    * 高阶组件就是一个包装函数
    ```js
        // withRouter
        // App = withRouter(App)

        function withRouter(MyConponent){
            return class ContainerComponent extends{
                ///
                render(){
                    return <MyConponent history location match/>
                }
            }
        }
    ```

### 面试题
* 函数防抖
    * 对于多次操作，只执行第一次操作（忽略第一次后所有操作）
    * 案例
        * 懒加载
* 函数节流
    * 对于多次操作，只执行最后一次操作
    * 案例
        * 搜索建议
        * 动画