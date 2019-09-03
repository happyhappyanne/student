const express =require('express');
//导入Course集合应用规则
const Course= require('../gather/courseSchema');
//创建路由对象 index
const index = express.Router();
let info = {};

index.get('/index', async (req, res) => {
    //console.log(req);
    // Course.find().then(result => {
    //     console.log('获取成功');
    //     console.log(result);
    // })
   let courseInfo = await Course.find();
   info.status = 200;
   info.msg = 'ok';
   info.data = courseInfo;
//    console.log(info);
   res.send(info);
        
})

module.exports = index;