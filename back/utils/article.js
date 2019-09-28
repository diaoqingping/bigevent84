var article = {
    article_show: function (param, callBack) {
        $.get(url.article_show, param, function (res) {
            callBack(res);
        })
    },
    article_public: function (fd, callBack) {
        $.post(url.article_publish, {
            fd
        }, function (res) {
            callBack(res);
        })
    },
    del: function (id, callBack) {
        $.get(url.del, {
            id: id
        }, function (res) {
            ballBack(res);
        })
    },
    edit: function (fd, callBack) {
        $.ajax({
            url: url.edit,
            type: 'post',
            data: fd,
            processData: false,
            contentType: false,
            success: function (res) {
                callBack(res);
            }
        });
    },
    // add:function(fd,callBack){

    // }
}