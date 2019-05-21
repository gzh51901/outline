import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import Home from './pages/Home/';
import Goods from './pages/Goods';
import Cart from './pages/Cart';

import { TabBar, Flex } from 'antd-mobile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        {
          name: 'Home',
          text: '首页',
          path: '/home'
        }, {
          name: 'Cart',
          text: '购物车',
          path: '/cart'
        }
      ],
      currentTab: 'Home'
    }

    this.goto = this.goto.bind(this);
  }
  goto(item) {
    this.setState({
      currentTab: item.name,
    });

    let { history } = this.props;
    history.push(item.path);


  }
  render() {
    // let {goodslist} = store.getState();
    let { goodslist } = this.props
    console.log('App.props:', this.props)
    return (
      <div>
        {
          // this.state.pages.map(item=><button key={item.name} onClick={this.goto.bind(this,item)}>{item.text}{item.name==='Cart'?goodslist.length:null}</button>)
        }
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
              noRenderContent={true}
            >
              {
                this.state.pages.map(item => <TabBar.Item
                  title={item.name}
                  key={item.name}
                  icon={<img src='https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg' style={{ width: '22px' }} alt="" />}
                  selectedIcon={<img src='https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg' style={{ width: '22px' }} alt="" />}
                  selected={this.state.currentTab === item.name}
                  onPress={this.goto.bind(this, item)}
                  badge={item.name === 'Cart' ? goodslist.length : null}
                >

                </TabBar.Item>)
              }


            </TabBar>

            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/goods/:id' component={Goods} />
              <Route path='/cart' component={Cart} />
              <Redirect from="/" to="/home" />
            </Switch>

      </div>
    )
  }
}
App = withRouter(App);
let mapStateToProps = (state) => {
  // 等效于 <App v-bind={username:'laoxie',age:18}/>
  return {
    // 返回对象的属性就是传入组件的props属性
    goodslist: state.goodslist
  }
}
App = connect(mapStateToProps)(App);
export default App;
