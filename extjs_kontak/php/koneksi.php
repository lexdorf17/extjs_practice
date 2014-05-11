<?php
 

$server = "127.0.0.1";
 
$user = "root";
 
$password = "";
 
$db = "blog";
 
$koneksi = mysql_connect($server,$user,$password) or die (mysql_error());
 
$select = mysql_select_db($db, $koneksi) or die(mysql_error());
 
?>