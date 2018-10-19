<?php
header("content-type:text/html;charset=utf-8");
$uphone = $_POST['J_register_phone_number'];
$upsw = $_POST['J_register_pasword_phone'];
$db = mysql_connect("localhost","root","root");
mysql_select_db("pc_project",$db);
mysql_query("set names utf-8");
$sql = "INSERT INTO `login_and_register`( `uphone`, `upsw`) VALUES ($uphone,'$upsw')";
$row = mysql_query($sql);
if($row) {
    echo "<script>alert('注册成功！');location.href='../login.html';</script>";
}else {
    echo "<script>alert('注册失败，请重新注册！');location.href='../register.html';</script>";
}