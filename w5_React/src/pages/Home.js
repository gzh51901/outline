import React,{Component} from 'react';


class Home extends Component{
    constructor(){
        super();
        this.state = {
            password:10
        }
        console.log('constructor')
    }

    // 生命周期函数中this指向组件实例
    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    // props有修改
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps',nextProps)
    }

    // 是否更新组件
    // 一般用于优化React的性能
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate',nextProps, nextState)
        if(nextState.password>20){
            return true
        }
        return false;
    }

    // 更新
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate',nextProps, nextState)
    }

    componentDidUpdate(nextProps, nextState){
        console.log('componentDidUpdate',nextProps, nextState)
    }
    
    render(){
        console.log('render')
        return (
            <div className="home">
                Home -> password: {this.state.password}
                <p>
                    <img src="../assets/img/mv3.jpg"/>
                </p>

                <button onClick={()=>{
                    let password = this.state.password
                    this.setState({
                        password:password+1
                    })
                }}>change password</button>
            </div>
        )
    }
}

 export default Home;