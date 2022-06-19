# php上传文件

### php代码如下
```move_uploaded_file()存储的图片路径 windows系统下要绝对路径才能从临时文件夹移动文件 ```
```php
<?php
header("Content-type:text/html;charset=utf-8");
//接收upImage.html传来的数据
$file = $_FILES['image'];
if(is_uploaded_file($file['tmp_name'])){
    echo 1;
    if(move_uploaded_file($file['tmp_name'],'D:\phpstudy_pro\WWW\blt\View\测试内容\php\upload\ '.$file['name'])){
        echo 11;
    }else{
        echo 22;
    }
}else{
    echo 0;
}
?>
```
### html代码如下
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图片上传</title>
    <link rel="shortcut icon" href="../Assets/favicon(2).ico" type="image/x-icon">
    <script src="../Script/node_modules/jquery/dist/jquery.js"></script>
</head>
<body>
   <form action="./php/upImage.php" enctype="multipart/form-data" method="post">
    <input type="file" name="image" id="image" multiple>
    <input type="submit" value="上传">
   </form>

</body>
</html>
```
### 通过ajax上传 formdata方式
```js
function uploadfile(){
        document.getElementById("imglists").innerHTML="";
        
        var file = document.getElementById('images').files;
        // console.log(file.length);
        var qr = confirm("确定发布文章吗？");

        if(!qr){
            return false
        }else{
        if(file == null || file == ""){
            console.log("请上传图片");
            return fales;
        }
        var formData = new FormData();
        for(var i = 0;i<file.length;i++){
            formData.append("file["+i+"]",file[i]);
        }
        $.ajax({
            url:'http://localhost:82/测试内容/php/upImage.php',
            type:'post',
            data:formData,
            dataType:'text',
            async:false,//true同步传输/fasle异步传输
            contentType:false,
            //告诉jQuery不要去设置Content-Type请求头
            cache:false,//每次读取的是最新数据
            processData:false,
            success:function(res){
                var rels = JSON.parse(res);
                console.log(rels);
                // console.log(JSON.parse(res);
                for (var key in rels){
                var lists = document.createElement('li');
                lists.style.listStyle="none";
                lists.innerHTML='<img src="'+rels[key]+'" alt="" width="'+200+'">';
                document.getElementById('imglists').appendChild(lists);
                }      
            }
        })
    }
    }
```
```js
formData.append('name',value) //追加的数据在php中用$_post获取
```