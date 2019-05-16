import React from 'react';

import TodoItem from './TodoItem';

function TodoContent({data,removeItem,completeItem}){
    return (
        <table className="todo-list">
            <thead>
                <tr>
                    <th>#</th>
                    <th>待办事项</th>
                    <th>计划完成事件</th>
                    <th>是否完成</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
            {
                // 列表
                data.map((item,idx)=><TodoItem 
                data={item} 
                idx={idx} 
                key={item.id}  
                removeItem={removeItem} 
                completeItem={completeItem}
                />)
            }
            </tbody>
        </table>
    )
}

export default TodoContent;