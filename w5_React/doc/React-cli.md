# React脚手架

## create-react-app

### 安装

```bash
    npm install -g create-react-app
```

### 创建react项目

```bash
    create-react-app myapp
```

>项目依赖：react,react-dom,react-scripts

通常情况下，我们创建spa应用时是使用npm安装项目依赖，在通过配置webpack.config.js进行配置，搭建好环境后在src编写源代码。而create-react-app是自动构建，在package.json中只有react-scripts作为依赖

### 目录结构

![folder](./img/folder.png "Optional title")


### 命令
* npm start
* npm run eject
单向操作不可逆，npm eun eject命令暴露项目的配置，可以自由配置项目所需的依赖，不使用的版本零配置即可开发