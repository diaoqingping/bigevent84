var article={
    article_public:function(fd,callBack){
        $.post(url.article_publish,{fd},function(res){
            callBack(res);
        })
    }
}