<?php
$conn= mysqli_connect("localhost","root","root");
if(!$conn){
	die('数据库链接失败'.mysqli_connect_error());
}
//三种链接方法
$dbselsect=mysqli_select_db($conn,"blt");//注意mysql与mysqli的参数相反
if(!$dbselsect)
{
	die('数据库不可用：'.mysqli_error($conn));
}
mysqli_query($conn,"set names utf8");
//header("content-type:application/json");
?>