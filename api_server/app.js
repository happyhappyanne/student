//express
const express = require('express');
const index =require('./router/router');
const path = require('path');
//创建服务器
const app = express();
// 设置静态资源管理
app.use(express.static(path.join(__dirname, '')));
//设置CORS跨域
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'get,post');
    next();
})

app.use('/index', index);

//监听8888端口
app.listen(3001);