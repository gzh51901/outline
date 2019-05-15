/**
    * 组件
        * 函数组件
            * 必须有返回值
        * 类组件
            * 
    * 组件传参
        * 父->子：
 */

 import React,{Component} from 'react';

 import Home from './pages/Home';

// const App = props=>{
//     return <div className="myapp">
//         <Home username="laoxie"/>
//     </div>
//  }

class App extends Component{
    // 构造函数(初始化函数)
    constructor(props){ console.log('constructor:',props)
        super(props);//call()/apply()
        
        // 组件状态
        this.state = {
            age:18,
            username:props.username
        }

        this.show = this.show.bind(this);

    
    }

    // state = {
    //     username:'lemon'
    // }

    // 给原型对象添加方法
    // show = ()=>{

    // }

    // show = ()=>{
    //     console.log('show',this)
    // }

    show(a,b,e){
        console.log('show:',a,b,e)

        // setState修改会有一定的延迟
        this.setState({
            username:'tiantian'
        },()=>{
            console.log('callback:',this.state.username)
        })

        console.log(this.state.username)
    }
    
    render(){
        console.log('render this:',this);// this指向组件实例
        return (
            <div className="myapp">
                <Home username="laoxie"/>
                年龄：{this.state.age}
                <button onClick={this.show.bind(this,10,20)}>点我({this.state.username})有惊喜</button>
            </div>
        )
    }
}


 export default App;