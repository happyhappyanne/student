//引入express
const express = require('express');
// 文件读取
const fs = require('fs');
// 路径
const path = require('path');
// 模板express-art-template
const template = require('express-art-template');

// web服务器
const app = express();
// 静态资源设置
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, doc) => {
        res.send(doc);
    });
});
app.listen(3000);