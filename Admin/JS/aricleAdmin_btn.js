var selectBtn,insertBtn,updateBtn,deleteBtn;
selectBtn = document.querySelector('.select_btn');
insertBtn = document.querySelector('.insert_btn');
updateBtn = document.querySelector('.update_btn');
deleteBtn = document.querySelector('.delete_btn');

function ShowSelectBox(){
    document.getElementById('select_aricle').style.display="block";
    document.getElementById('insert_aricle').style.display="none";
    document.getElementById('update_aricle').style.display="none";
    document.getElementById('delete_aricle').style.display="none";
}
function ShowInsertBox(){
    document.getElementById('select_aricle').style.display="none";
    document.getElementById('insert_aricle').style.display="block";
    document.getElementById('update_aricle').style.display="none";
    document.getElementById('delete_aricle').style.display="none";}
function ShowUpdateBox(){
    document.getElementById('select_aricle').style.display="none";
    document.getElementById('insert_aricle').style.display="none";
    document.getElementById('update_aricle').style.display="block";
    document.getElementById('delete_aricle').style.display="none";}
function ShowDeleteBox(){
    document.getElementById('select_aricle').style.display="none";
    document.getElementById('insert_aricle').style.display="none";
    document.getElementById('update_aricle').style.display="none";
    document.getElementById('delete_aricle').style.display="block";}

function time(){
   var now = new Date();
   var Y = now.getFullYear();
   var M = now.getMonth()+1;
   var D = now.getDate();
   
   var h = now.getHours();
   var m = now.getMinutes();
   var s = now.getSeconds();
   document.getElementById("time").value=Y+"-"+M+"-"+M+""+h+":"+m+":"+s;
}
// 上传文章
function article_upload(){
    var AricleInfo = document.querySelector('#aricle_info');
    var file = AricleInfo.querySelector('#imgs').files;
    var title = AricleInfo.querySelector('#title').value;//标题
    var content = AricleInfo.querySelector('#content').value;//内容
    var date = AricleInfo.querySelector('#time').value;//发布时间
    var bltID = window.sessionStorage.getItem('bltID');//bltID
    //判断数据是否上传正确
    //判断图片数量，显示图片信息数量，提示是否上传
    // var arr=[];
    var formdata = new FormData();
    for(var i=0;i<file.length;i++)[
        formdata.append("files["+i+"]",file[i])
    ]
    formdata.append('title',title);
    formdata.append('content',content);
    formdata.append('date',date);
    formdata.append('bltID',bltID);
    //查看数据内容
    // for(var itmes of formdata.entries()){
    //     // console.log(itmes);
    //     arr.push(itmes);
    // }
    // console.log(arr);
    $.ajax({
        url:'http://localhost:83/php/uparticle.php',
        type:'post',
        data:formdata,
        dataType:'text',
        async:false,
        contentType:false,
        cache:false,
        processData:false,
        success:function(res){
            console.log(JSON.parse(res));
        }        
    })
}