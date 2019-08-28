//mongose
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost:27017/bxg', { useNewUrlParser: true })
        .then(() => {
            console.log('成功');
        }).catch((error) => {
            console.log(error);
        })
