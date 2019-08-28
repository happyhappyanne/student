//引入数据库连接
require('../db/db');
//引入mongoose
const mongoose = require('mongoose');
// 创建集合规则
const CourseSchema = new mongoose.Schema({
    name: {
        type: String
    },
    //
    count: {
        type: Number
    },
    price: {
        type: String
    },
    img: {
        type: String
    }
})
//创建集合应用规则
const Course = mongoose.model('Course', CourseSchema);
// Course.find().then(result => {
//     console.log(result);
// })
// Course.create({
//     name: 'lisi',
//     count: 20,
//     price: '年费',
//     img: '11'
// }, (err, doc) => {
//     if(err){
//         console.log('err:' + err);
//     }else{
//         console.log(doc);
//     }
// })
module.exports = Course;