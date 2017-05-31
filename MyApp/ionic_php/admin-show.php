<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

		include"config.php";

		$query="SELECT * FROM tb_admin  ";
		$result = $conn->query($query);


		$outp = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"admin_id":"'.$rs["admin_id"].'",';
  			$outp .= '"admin_user":"'.$rs["admin_user"].'",';
  			$outp .= '"admin_password":"'.$rs["admin_password"]. '"}';
    }
    $outp ='{"records":['.$outp.']}';
    $conn->close();

    echo($outp);

?>
