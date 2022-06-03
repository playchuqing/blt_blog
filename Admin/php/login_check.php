<?php
require_once('conn.php');
header("Content-Type:text/html;charset=utf-8");

$uname=$_POST['uname'];
$upass=md5($_POST['upass']);
// var_dump($upass);
$sql_userinfo="select * from blt_users_info where user_name='".$uname."'";
$userinfo = mysqli_query($conn,$sql_userinfo);
// var_dump($userinfo);
// echo "<br/>";
// var_dump(mysqli_num_rows($userinfo));
// echo "<br/>";
// var_dump(mysqli_fetch_all($userinfo,MYSQLI_ASSOC));

$rows=mysqli_num_rows($userinfo);
$rows_arr=mysqli_fetch_all($userinfo,MYSQLI_ASSOC);

if($rows>=1){
    echo "<script>alert('登陆成功!');window.location.href='http://localhost:83/html/admin.html'</script>";
    var_dump($rows);
}else{
    echo "false"."<br/>";
    var_dump($rows);
    exit;
}
mysqli_close($conn);
?>