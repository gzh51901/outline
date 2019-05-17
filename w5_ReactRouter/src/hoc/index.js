/**
 * 高阶组件
 * 是一个函数，并返回一个新的组件
 * 设计模式：装饰器模式
 */
import React,{Component} from 'react';

 export function withStorage(WrappedComponent,a){
    console.log('a:',a)
    return class extends Component{
        // props:{age:18,username:'laoxie'}
        constructor(){
            super();
            this.state = {
                name:'xxx',
                price:123,
                salePrice:100
            }
        }
        render(){
            let username = localStorage.getItem("username");
            return <WrappedComponent username={username} {...this.state} {...this.props}  />
        }
    }

    // return function Myxxx(props){
    //     let username = localStorage.getItem("username");
    //     return <WrappedComponent username={username} {...props}  />
    // }
 }
