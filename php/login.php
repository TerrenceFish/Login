<?php
	$email = $_POST["email1"];
	$password = $_POST["password1"];
	$conn = mysql_connect("127.0.0.1","root","fuckm00n");
	$sql = "select password from company where email='".$email."'";
	$result = mysql_db_query("test",$sql,$conn);

	$pd = mysql_fetch_array($result);
	if($pd[0] == $password){
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Log In Success</title>
	<meta http-equiv="refresh" content="2;url=../src/register.html">
	<style>
		html,body,p,div{margin:0px;padding:0px;}
		body{overflow:hidden;}
		#bg{
			transition:all 1000ms ease-in;
			transform-origin:50% 20%;
			transform:scale(1);
			width:100%;
			height:100%;
			position:absolute;
			background:url(../img/mainbg.jpg);
		}
		#bg:hover {
			transition:all 1000ms  ease-out;
			transform:scale(1.03);
		}
		#container{
			min-width:400px;
			min-height:400px;
			position:absolute;
			top:20%;
			right:22%;
			width:58%;
			height:58%;
			background:rgba(255,255,255,0.5);
			border-radius:5px;
		}
	</style>
</head>
<body>
	<div id="bg"></div>
	<div id="container">
		<center><h2>欢迎您！<?php echo $email?>！</h2></center>
		<center><h2>请完善个人信息 2秒后跳转</h2></center>
	</div>
</body>
</html>
<?php
	}else{
		header("Location:../src/login_failed.html");
	}
	mysql_free_result($result);
	mysql_close($conn);

?>
