var category = {
    show: function (callback) {
        $.get(url.show, function (res) {
            callback(res);
        });
    },
    add: function (addname, addslug, callback) {
        $.post(url.add, {name: addname,slug: addslug}, function(res) {
            callback(res);
        });
    },
    edit:function(id,name,slug,callback){
        $.post(url.edit,{id:id,name:name,slug:slug},function(res){
            callback(res)
        });
    },
    del:function(id,callback){
        $.post(url.del,{id:id},function(res){
            callback(res);
        })
    }
}