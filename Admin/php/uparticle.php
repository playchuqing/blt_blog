<?php
    require_once('conn.php');
    header("content-type:application/json");
    $files = $_FILES['files'];
    $title = $_POST['title'];
    $content = $_POST['content'];
    $time = $_POST['date'];
    $bltID = $_POST['bltID'];
    $ArticleInfo = array(
        "imgs"=>array(),
        
    );
    $imgs = array();
    //转移图片路径 储存转移后的图片路径到imgs数组
    //把其他数据存和imgs图片数据push到articleinfo数组
    //存到数据库
    echo json_encode($ArticleInfo);

?>