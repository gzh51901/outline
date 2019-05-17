import React,{Component} from 'react';

class List extends Component{
    
    componentDidMount(){
        console.log('List:',this.props)
    }
    render(){
        
        return (
            <div className="home">
                商品列表
            </div>
        )
    }
}

 export default List;