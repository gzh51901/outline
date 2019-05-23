import React,{Component} from 'react';
import {connect} from 'react-redux';


class Cart extends Component{
  render(){
    
    let {goodslist} = this.props
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

Cart = connect(state=>({
  goodslist:state.cart.goodslist
}))(Cart)
export default Cart;

