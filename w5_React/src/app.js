import React from 'react';
import ReactDOM from 'react-dom';


// JSX

// <div>
//     <h1>免费登录</h1>
//     <div class="form-group">
//         <label for="username">用户名：</label>
//         <input type="text" name="username"/>
//     </div>
//     <div class="form-group">
//         <label for="password">密码：</label>
//         <input type="password" name="password"/>
//     </div>
//     <div class="form-group">
//          <button>登录</button>
//     </div>
// </div>

// ReactDOM.render(
//     React.createElement('div',{className:'from'},[
//         React.createElement('h1',{},'免费登录'),
//         React.createElement('div',{className:'form-group'},[
//             React.createElement('label',{htmlFor:'username'},'用户名：'),
//             React.createElement('input',{name:'username',type:'text'})
//         ])
//     ]),
//     document.getElementById('app')
// )


let username = 'laoxie';

function changeusername(e){
    username = e.target.value
}

ReactDOM.render(
    <div>
        <h1>免费登录</h1>
        <div className="form-group">
            <label htmlFor="username">用户名：</label>
            <input type="text" name="username" value={username} onChange={changeusername} autoFocus/>
        </div>
        <div className="form-group">
            <label htmlFor="password">密码：</label>
            <input type="password" name="password"/>
        </div>
        <div class="form-group">
            <button>登录</button>
        </div>
    </div>,
    document.getElementById('app')
)