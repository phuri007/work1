<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


		include"config.php";

    $id=$_GET["id"];


    $sql="delete  from tb_admin   where admin_id='$id'  ";
    $res=mysqli_query($conn,$sql);
    if($res){
      echo true;
    }else{
      echo false;
    }

?>
