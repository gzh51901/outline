import React,{Component} from 'react';

import TodoList from './pages/TodoList';

class App extends Component{
    render(){
        return (
            <div className="container">
                <TodoList/>
            </div>
        )
    }
}

export default App;