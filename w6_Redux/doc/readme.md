## day6-1

### Redux
* Redux: Flux的变种（与VueX类似）
* react-redux：连接React与Reudx的工具

* 核心概念
    * Store 仓库（存放数据的地方）
        * State 状态（数据）
        * 创建：redux.createStore(reducer)
        * 方法：
            * 获取state: store.getState()
            * 修改state: store.dispatch(action)
            * 监听state: store.subscribe(fn)
    * Reducer 修改State的逻辑
        * 创建store时就必须定义好修改state的方式
        * reducer是一个纯函数，参数为：(defaultState,action)
    * Action 是一个对象，用于告诉reducer我要干嘛
        * 格式：{type,payload}
        * ActionCreator：一个用于创建action的函数


* 完整案例
```js
    import { createStore } from 'redux';

    // 创建reducer
    let defaultState = {goodslist:[],step:0}
    let cartReducer = (state=defaultState,action)=>{
        // 在reducer中必须返回一个新的state
        switch(action.type){
            case 'UPDATE_CART';
                return {...state,goodslist:action.payload}

            case 'ADD_TO_CART';
                return {...state,goodslist:[...state.goodslist,actions.goods]}

            default:
                return state;
        }

    }

    // 创建store
    const store = createStore(reducer);

    // 添加到购物车
    let goods = {name:'onePlus 7 pro'}
    let action = {type:'ADD_TO_CART',goods}
    store.dispatch(action)

```

### 知识点
* 在Vue中写入html内容：v-html="<h1></h1>";
* 在React中写入html内容：dangerouslySetInnerHTML={{__html:'<h1></h1>'}}


## day6-2
* react-redux
    * connect高阶组件：用于连接React组件与store


## day6-3

### 复习
* React
* Redux
    * store
        * 创建 createStore(reducer)
        * state 数据状态
        * 方法
            * store.getState()
            * store.dispatch(action)
            * store.subscribe(callback)
    * action
        * 命令/指令 
        * 格式：{type,payload}
        * actionCreator
            * 一个函数，返回action
    * reducer
        * 实现定义好的state的修改方式
* react-redux
    * 利用context实现组件通讯
    * <Provider store={}/>
        * 用户给子组件提供store
        * 作为最外层组件
    *  connect(mapStateToProps[,mapDispatchToProps])(Component)

### Vuex VS Redux

            Vuex                Redux
            store               store
            state               state
            getters             
            mutation            reducer
                commit              dispatch
            actions             中间件

* redux-saga
    * Generator
    function* show(){}