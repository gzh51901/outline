import React,{Component} from 'react';
import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

import PropTypes from 'prop-types';

import MyContext from './context';

class TodoList extends Component{
    constructor(){
        super();

        // TodoList数据
        this.state = {
            datalist:[
                {
                    id:Date.now(),
                    content:'完成React项目',
                    date:'2019-5-28',
                    done:false,
                    selected:false
                }
            ]
        }

        // 改变函数this指向
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
    }

    // 添加
    addItem(content,date){
        let data = {
            id:Date.now(),
            content,
            date,
            done:false,
            selected:false
        }

        this.setState({
            datalist:[data,...this.state.datalist]
        })
    }
    // 删除
    removeItem(id){
        let datalist = this.state.datalist.filter(item=>item.id != id);

        this.setState({
            datalist
        })
        
    }

    // 完成
    completeItem(id){
        let datalist = this.state.datalist.map(item=>{
            if(item.id === id){
                item.done = true;
            }

            return item;
        });



        this.setState({
            datalist
        })
    }

    // @context共享
    // 1.父组件定义数据
    // getChildContext(){
    //     return {
    //         username:'lemon'
    //     }
    // }

    render(){
        let {datalist} = this.state;
        return (
            <MyContext.Provider value={{completeItem:this.completeItem,removeItem:this.removeItem}}>
                <div className="todo-list">
                    <TodoForm addItem={this.addItem}/>
                    <TodoContent data={datalist} removeItem={this.removeItem} completeItem={this.completeItem}/>
                </div>
            </MyContext.Provider>
        )
    }
}

// 2.父组件校验context属性
// TodoList.childContextTypes = {
//     username:PropTypes.string
// }

export default TodoList;

export {MyContext} 