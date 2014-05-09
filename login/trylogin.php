<?php
$username=$_POST['username'];
$password=($_POST['password']);

if($username=="admin"){

	echo "success";
	exit();
}else{
	echo "failed";
	exit();
}

?>