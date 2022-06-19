<?php
require_once('conn.php');
$uname=$_POST['uname'];
$upass=md5($_POST['upass']);
// var_dump($upass);
$sql_userinfo="select * from blt_users_info where user_name='".$uname."'";
$userinfo = mysqli_query($conn,$sql_userinfo);
$rows=mysqli_num_rows($userinfo);
$rows_arr=mysqli_fetch_all($userinfo,MYSQLI_ASSOC);
$arr=[];
if($rows>=1){
    if(($rows_arr[0]['user_password'])===$upass){
        $id = $rows_arr[0]['id'];
        // $name = $rows_arr[0]['user_name'];
        // $pass = $rows_arr[0]['user_password'];
        // var_dump($name);
        // array_push($arr,$id,$name,$pass);
        echo "<script>alert('登录成功');window.location.href='http://localhost:83/html/admin.html?bltID=$id'</script>";
		exit;

    }else{
        echo "<script>alert('请输入密码');alert('返回页面');window.location.href='http://localhost:83/html/index.html'</script>";
		exit;
    }
}else{
    echo "<script>alert('账号错误');alert('返回页面');window.location.href='http://localhost:83/html/index.html'</script>";
	exit;
}
mysqli_close($conn);
?>