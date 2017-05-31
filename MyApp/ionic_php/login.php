<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if(isset($_GET["username"]) && isset($_GET["password"]) ){
	if( !empty($_GET["username"])  && !empty($_GET["password"])  ){

		include"config.php";

		$username=$_GET["username"];
		$password=$_GET["password"];

		$query="SELECT * FROM tb_admin
				where admin_user='".$_GET["username"]."' and admin_password='".$_GET["password"]."'  ";
		$result = $conn->query($query);

    $outp = "";
		if( $rs=$result->fetch_array()) {
			if ($outp != "") {$outp .= ",";}
			$outp .= '{"admin_id":"'  . $rs["admin_id"] . '",';
			$outp .= '"admin_user":"'   . $rs["admin_user"]        . '",';
			$outp .= '"admin_password":"'. $rs["admin_password"]     . '"}';
		}
		$outp ='{"records":'.$outp.'}';
		$conn->close();

		echo($outp);
	}
}
?>
