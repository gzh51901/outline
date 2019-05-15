import React from 'react';

 function Home({username}){
    //  console.log(props)
    // console.log(Object.getOwnPropertyDescriptor(props,'username'))
    return <div className="home">
        首页
        {username}
    </div>
 }

 export default Home;