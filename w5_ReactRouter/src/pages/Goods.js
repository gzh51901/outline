import React,{Component} from 'react';

import {withStorage} from '../hoc';

// ES7装饰器模式写法
@withStorage
class Goods extends Component{

    render(){
        console.log(this)
        return (
            <div className="home">
                商品详情
            </div>
        )
    }
}

// 普通写法
//  export default withStorage(Goods);

//  ES7写法
export default Goods;