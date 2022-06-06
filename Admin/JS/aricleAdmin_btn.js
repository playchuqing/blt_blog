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
