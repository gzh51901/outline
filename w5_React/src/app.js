import React,{Component} from 'react';

import TodoList from './pages/TodoList';
import Home from './pages/Home'

class App extends Component{
    constructor(){
        super();

        this.state = {
            username:'lemon'
        }
    }
    render(){
        return (
            <div className="container">
                <h4>App->username:{this.state.username}</h4>
                {/* <TodoList/> */}
                <Home username={this.state.username}/>

                <button onClick={()=>{
                    this.setState({
                        username:'laoxie'
                    })
                }}>change username</button>
            </div>
        )
    }
}

export default App;