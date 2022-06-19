window.onload = function () {
    var LeftBoxNav = document.getElementById("left_box_nav");
    var lists = LeftBoxNav.getElementsByTagName("li");
    console.log(lists);
    var urls = [
        '../html/articleAdmin.html',
        '../html/infoAdmin.html',
        '../html/其他设置.html'
    ];
    $.ajax({
            url: urls[0],
            type: 'get',
            success: function(res) {
                $('.show_content').html($(res));
                // console.log(res);
            }
        });
    for (var i = 0; i < lists.length; i++) {
        lists[i].setAttribute('index', i);
        lists[i].onclick = function () {
            console.log(this.getAttribute('index'));
            $.ajax({
                url: urls[this.getAttribute('index')],
                type: 'get',
                success: function (res) {
                    $('.show_content').html($(res));
                    // console.log(res);
                }
            });
        }
    }
}
// $.ajax({
//     url: urls[i],
//     type: 'get',
//     success: function(res) {
//         $('.show_content').html($(res));
//         // console.log(res);
//     }
// });