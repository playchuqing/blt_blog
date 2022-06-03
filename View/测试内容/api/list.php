<?php
require_once "database.php";

$sql = "SELECT * FROM `list` ORDER BY `list`.`id` ASC";
$result = $conn->query($sql);
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
        var_dump($row);
    }
}else{
    echo "0结果";
}
$conn->close();
?>