import React,{Component} from 'react';

import {Route,Redirect,Switch,withRouter} from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';
import Goods from './pages/Goods';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Reg from './pages/Reg';

@withRouter
class App extends Component{
    constructor(){
        super();
        this.state = {
            pages:[{
                name:'首页',
                path:'/home',
            },{
                name:'列表',
                path:'/list',
            },{
                name:'购物车',
                path:'/cart',
            },{
                name:'注册',
                path:'/reg',
            },{
                name:'登录',
                path:'/login',
            }]
        }

        this.goto = this.goto.bind(this);
    }
    goto(page){
        // 获取history对象


        this.props.history.push({
            pathname:page.path,
            search:'?name='+page.name,
            state:{
                name:page.name,
                price:666
            }
        })
    }
    render(){
        return (
            <div className="container">

                <ul>
                    {
                        this.state.pages.map(item=><li key={item.name} onClick={this.goto.bind(this,item)}>
                            {/* <NavLink 
                            to={item.path}
                            activeStyle={{color:'#f00',fontWeight:'bold'}}
                            > */}
                            {item.name}
                            {/* </NavLink> */}
                        </li>)
                    }
                </ul>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/goods/:id" component={Goods}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </div>
        )
    }
}

// App = withRouter(App);

export default App;