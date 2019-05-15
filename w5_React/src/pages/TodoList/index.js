import React,{Component} from 'react';
import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

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
    }

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
    render(){
        let {datalist} = this.state;
        return (
            <div className="todo-list">
                <TodoForm addItem={this.addItem}/>
                <TodoContent data={datalist}/>
            </div>
        )
    }
}

export default TodoList;