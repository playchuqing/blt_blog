function articleAPI(){

    var Admins = document.querySelector('.left_box_nav');
    //拿到文章管理
    var article_admin = Admins.querySelector('.article_admin');    
    // console.log(article_admin);

    $.ajax({
        url: '../html/articleAdmin.html',
        type: 'get',
        success: function(res) {
            $('.show_content').html($(res));
            // console.log(res);
        }
    });
}