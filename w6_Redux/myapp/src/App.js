import React,{Component} from 'react';

import {Switch,Route,Redirect,withRouter} from 'react-router-dom';

import Home from './pages/Home';
import Goods from './pages/Goods';
import Cart from './pages/Cart';

import store from './store';


class App extends Component{
  constructor(){
    super();
    this.state = {
      pages:[
        {
          name:'Home',
          text:'首页',
          path:'/home'
        },{
          name:'Cart',
          text:'购物车',
          path:'/cart'
        }
      ]
    }

    this.goto = this.goto.bind(this);
  }
  goto(item){
    let {history} = this.props;
    history.push(item.path)
  }
  render(){
    let {goodslist} = store.getState();
    return (
      <div>
        {
          this.state.pages.map(item=><button key={item.name} onClick={this.goto.bind(this,item)}>{item.text}{item.name==='Cart'?goodslist.length:null}</button>)
        }

        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/goods/:id' component={Goods}/>
          <Route path='/cart' component={Cart}/>
          <Redirect from="/" to="/home"/>
        </Switch>
      </div>
    )
  }
}
export default withRouter(App);
