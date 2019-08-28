//express
const express = require('express');
const index =require('./router/router');
//创建服务器
const app = express();

app.use('/index', index);

//监听8888端口
app.listen(3001);