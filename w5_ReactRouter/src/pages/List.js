import React,{Component} from 'react';

import {Route,Redirect,Switch,NavLink,withRouter} from 'react-router-dom';

function Phone(){
    return <div>
        手机
    </div>
}


function Computer(){
    return <div>
    电脑
    </div>
}

function Pad(){
    return <div>
    平板
    </div>
}
class List extends Component{
    constructor(){
        super();
        this.state = {
            submenu:[{
                name:'手机',
                path:'/phone',
            },{
                name:'电脑',
                path:'/computer',
            },{
                name:'平板',
                path:'/pad',
            }]
        }

    }
    componentDidMount(){
        console.log('List:',this.props)
    }
    render(){
        let {match} = this.props;
        return (
            <div className="home">
                商品列表
                <div>
                    {
                        this.state.submenu.map(item=><NavLink key={item.name} to={match.url + item.path} style={{margin:'0 10px'}} activeStyle={{color:'#58bc58',fontWeight:'bold'}}>{item.name}</NavLink>)
                    }
                </div>

                <Switch>
                    <Route path={match.path+"/phone"} component={Phone}/>
                    <Route path={match.path+"/computer"} component={Computer}/>
                    <Route path={match.path+"/pad"} component={Pad}/>
                </Switch>
            </div>
        )
    }
}

 export default List;