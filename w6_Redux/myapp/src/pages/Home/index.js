import React,{Component} from 'react';
import {getData} from '../../api';

import './home.css';
import {List} from 'antd-mobile';

class Home extends Component{
  state = {
    goodslist:[]
  }
  async componentDidMount(){
    let {data:{datas:{goods_list:goodslist}}} = await getData('/index.php',{
      params:{
        act:'goods',
        op:'goods_list',
        gc_id:'',
        page:'20'
      }
    });
    console.log(goodslist);

    this.setState({
      goodslist
    })
  }
  goto(id){
    let {history} = this.props;

    history.push('/goods/'+id);
  }
  render(){
    return (
      <div className="home">
        <List>
          {
            this.state.goodslist.map(item=><List.Item 
            key={item.goods_id} 
            onClick={this.goto.bind(this,item.goods_id)}
            arrow="horizontal"
            thumb={item.goods_image_url}
            multipleLine
            >
              {item.goods_name.slice(0,20)+'...'}
              <List.Item.Brief>
                <div className="price">
                <del>{item.goods_price}</del>
                <span>{item.goods_promotion_price}</span>
                </div>
              </List.Item.Brief>
            </List.Item>)
          }
        </List>
      </div>
    )
  }
}
export default Home;
