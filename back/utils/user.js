/**
 * 
 */

var user = {
    // 登录
    login: function (username, password, callback) {
        $.post(url.login, {user_name: username,password: password}, function (res) {
            callback(res);
        });
    },
    //获取用户信息
    getInfo:function(callback){
        $.get(url.userinfo,function(res){
            callback(res);
        });
    },
    logout:function(callback){
        $.post(url.logout,function(res){
            callback(res);
        });
    }
}