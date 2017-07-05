# generator-react-menu
> 基于react+redux+react-router+es6+webpack的项目目录生成器

### 准备工具
* node 最新稳定版
* yeoman `npm install -g yo`

### 安装脚手架
`npm install generator-react-menu -g`

### 生成脚手架
```
mkdir reactApp  
cd reactApp/
yo react-menu // 注意不能再加generator前缀，yeoman会自动匹配
```
命令成功执行后，reactApp文件夹中会生成项目目录
============================================================

### 运行项目
`node server.js`
	
### 打包命令
1. `npm run build-test`
2. `npm run build-pro`

### 代理配置
server.js 默认localhost:8080

```javascript
app.use(
'/service-core/web',
proxy('/',{
    target: 'http://localhost:8080',
    changeOrigin: true,
    ws: true,
}));
```

### 日志配置
src/store/configureStore.js

```javascript
if (process.env.NODE_ENV === 'production') {
	module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}
```



