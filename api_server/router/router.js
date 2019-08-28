const express =require('express');
//导入Course集合应用规则
const Course= require('../gather/courseSchema');
//创建路由对象 index
const index = express.Router();

index.get('/', async (req, res) => {
    //console.log(req);
    // Course.find().then(result => {
    //     console.log('获取成功');
    //     console.log(result);
    // })
   let courseInfo = await Course.find();
  res.send(courseInfo );
        
})

module.exports = index;