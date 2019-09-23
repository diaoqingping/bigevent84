var puburl = "http://localhost:8000/";

var url = {
    // 管理员登录
    login: puburl + 'admin/login',
    userinfo: puburl + 'admin/userinfo_get',
    logout: puburl + 'admin/logout',

    // 类别管理
    show:puburl+'admin/category_search',
    add:puburl+'admin/category_add',
    edit:puburl+'admin/category_edit',
    del:puburl+'admin/category_delete'

}