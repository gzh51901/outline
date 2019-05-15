## day5-2

* React （MVC中的view）


## day5-3
* 介绍react
    * Virtual DOM
    * View + Router + Redux
    * JSX -> React.creatElement(type,attr,children) => Object{type:'div',props:{id:'box',className:'box'},children[]}
        * {} | <>
        * class -> className
        * for   -> htmlFor
        * tabindex -> tabIndex
        * autofocus -> autoFocus
        * onclick -> onClick
        * ....
* 渲染
    * ReactDOM.render(template,target)
    <div>
        <h1>xxx</h1>
        <p>aaaa</p>
    </div>

    React.createElement('div',null,[
        React.createElement('h1',null,'xxx'),
        React.createElement('p',null,'aaaa')
    ]); //返回虚拟DOM

    <!-- 虚拟DOM -->
    {type:'div',children[{
        type:'h1',
        children:'xxx'
    },{
        type:'p',
        children:'aaa'
    }]}

    ===>diff算法<===   差异化对象{type:'p',children:''}

    {type:'div',children[{
        type:'h1',
        children:''
    },{
        type:'p',
        children:''
    }]}

