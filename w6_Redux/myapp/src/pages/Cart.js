import React,{Component} from 'react';

import store from '../store'

class Cart extends Component{
  render(){
    let {goodslist} = store.getState();
    return (
      <div>
        <ul>
          {
            goodslist.map(item=><li key={item.goods_id}>
              <img src={item.imgurl} alt={item.goods_name}/>
              <h4>{item.goods_name}</h4>
              <p>{item.price}</p>
              <p>qty:{item.qty}</p>
            </li>)
          }
        </ul>
      </div>
    )
  }
}
export default Cart;
