import React,{Component} from 'react';
import {getData} from '../api';

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
      <div>
        <ul>
          {
            this.state.goodslist.map(item=><li key={item.goods_id} onClick={this.goto.bind(this,item.goods_id)}>
              <img alt={item.goods_name} src={item.goods_image_url}/>
              <h4>{item.goods_name}</h4>
              <p className="price"><del>{item.goods_price}</del><span>{item.goods_promotion_price}</span></p>
            </li>)
          }
        </ul>
      </div>
    )
  }
}
export default Home;
