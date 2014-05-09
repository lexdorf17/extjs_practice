<?php

$userdb="root";
$userpass="";
$databasename="blog";
$prefix="";
$conn=mysql_connect($connstr,$userdb,$userpass) or die("can't connect database");

mysql_select_db($databasename,$conn);



?>