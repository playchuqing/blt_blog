<?php
header("Content-type:text/html;charset=utf-8");
//接收upImage.html传来的数据
$file = $_FILES['file'];
$Arrayimg=array();
// echo print_r($file);
// var_dump($file['name']);
// echo count($file['name']);
for ($i=0;$i<count($file['name']);$i++){
    $newname = "BLT".date('YmdHis').rand(100,900).strrchr($file['name'][$i],'.');
    // echo $newname;
    if(is_uploaded_file($file['tmp_name'][$i])){
        if(move_uploaded_file($file['tmp_name'][$i],'D:\phpstudy_pro\WWW\blt\View\测试内容\php\upload\ '.$newname)){
            // echo "上传成功\n";
            // echo 'D:\phpstudy_pro\WWW\blt\View\测试内容\php\upload\ '.$newname."\n";
            $newnamearray[$i]='http://localhost:82/测试内容/php/upload/ '.$newname;
            Array_push($Arrayimg,$newnamearray[$i]);
        }else{
            echo "上传失败";
        }
        
    }else{
        return false;
    }
}
$json_string = json_encode($Arrayimg);
echo $json_string;
?>