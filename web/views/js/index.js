$(function () {
    // 获取微课
    var lesson = $('#lesson');
    //请求index接口数据
    $.get('http://localhost:3001/index/index', (res) => {
        //console.log(res);
        if (res.status == 200) {
            // 模板引擎与数据拼接
            var html = template('lesson_temp', {
                data: res.data
            });
            lesson.html(html);
        }

    });

})