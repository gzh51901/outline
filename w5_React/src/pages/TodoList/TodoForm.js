import React,{Component} from 'react';


class TodoForm extends Component{
    constructor(){
        super();

        this.state = {
            keyword:'',
            date:''
        }

        this.addHandler = this.addHandler.bind(this);
        this.keywordHandler = this.keywordHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
    }
    addHandler(){
        let {keyword,date} = this.state;
        this.props.addItem(keyword,date);

        this.setState({
            keyword:'',
            date:''
        })

        // 自动获得焦点
        this.refs.keyword.focus();
    }

    keywordHandler(e){
        this.setState({
            keyword:e.currentTarget.value
        })
    }

    dateHandler(e){
        this.setState({
            date:e.currentTarget.value
        })
    }

    render(){
        let {keyword,date} = this.state;
        return (
            <div className="todo-list">
                <input type="text" value={keyword} onChange={this.keywordHandler} ref="keyword" />
                <input type="date" value={date} onChange={this.dateHandler}/>
                <button onClick={this.addHandler}>添加</button>
            </div>
        )
    }
}

export default TodoForm;