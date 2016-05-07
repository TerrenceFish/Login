<?php
	$company = $_POST["company"];
	$name = $_POST["man"];
	$email = $_POST["email"];
	$password = $_POST["password"];
	$conn = mysql_connect("127.0.0.1","root","fuckm00n");
	$num = mysql_db_query("test","select max(id) from company",$conn);
	$id = mysql_fetch_array($num);
	$max = $id[0] + 1;

	/*if (!$con)
	{
		die('Could not connect: ' . mysql_error());
	}*/
	$sql = "insert into company values(".$max.",'".$company."','".$name."','".$email."','".$password."')";
	echo $sql;

	$result = mysql_db_query("test", $sql,$conn);

	if($result){
		header("Location:../src/add_success.html");
	}else{
		header("Location:../src/add_failed.html");
	}
	mysql_free_result($result);
	mysql_close($conn);
?>
