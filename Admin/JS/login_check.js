function check(){
    var uname=document.getElementById("uname").value;
    var upass=document.getElementById("upass").value;
    if(uname==""){
        alert("用户名不正确");
        document.getElementById("uname").focus();
        return false;
    }else if(upass==""){
        alert("请输入密码！");
        document.getElementById("upass").focus();
        return false;
    }else{
        document.getElementById("f_login").submit();
        return true;
    }
}