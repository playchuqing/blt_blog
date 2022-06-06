<?php
$title = $_POST['title'];
$text = $_POST['text'];
$time = date('Y-m-d H:i:s');
$data = '{
    title:"'.$title.'",
    text:"'.$text.'",
    time:"'.$time.'"
}';
echo $data;
?>