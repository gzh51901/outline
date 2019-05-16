import React from 'react';

import PropTypes from 'prop-types';



class TodoButton extends React.Component{

    render(){
        // 4.子组件使用context
        let {onClick,children} = this.props;
        return <button onClick={onClick}>{children}</button>
    }
}

// 3. 子组件校验context属性
// TodoButton.contextTypes = {
//     username:PropTypes.string
// }


export default TodoButton;