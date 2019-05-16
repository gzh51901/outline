import React from 'react';

import Button from './TodoButton';

import MyContext from './context';

class TodoItem extends React.Component{

    render(){
        console.log('context:',this.context)
        let {data,idx} = this.props
        let {removeItem,completeItem} = this.context;
        return <tr>
            <td>{idx+1}</td>
            <td>{data.content}</td>
            <td>{data.date}</td>
            <td>{data.done?'完成':'未完成'}</td>
            <td>
                <Button onClick={completeItem.bind(this,data.id)}>完成</Button>
                <Button onClick={removeItem.bind(this,data.id)}>删除</Button>
            </td>
        </tr>
    }
}

TodoItem.contextType = MyContext

export default TodoItem;