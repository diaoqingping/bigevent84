var user = {
    // 登录
    login: function (username, password, callback) {
        $.post(url.login, {user_name: username,password: password}, function (res) {
            callback(res);
        })
    }
}