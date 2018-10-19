<?php
	header("content-type:text/html;charset=utf-8");
	$uphone = $_POST['zolShopUserName'];
    $upsw = $_POST['zolShopUserPsw'];
    $db = mysql_connect("localhost","root","root");
    mysql_select_db("pc_project",$db);
    mysql_query("set names utf-8");
    $sql = "SELECT * FROM `login_and_register` WHERE uphone=$uphone";
    $row = mysql_query($sql);
    $arr = mysql_fetch_array($row);
    if($uphone === $arr['uphone']){
		if($upsw == $arr['upsw']){
			echo "<script>alert('登录成功！');location.href='../index.html';</script>";
		}else{
			echo "<script>alert('用户名或密码错误！');location.href='../login.html'</script>";
		}
	}else{
        echo "<script>alert('用户名或密码错误！');location.href='../login.html'</script>";
    }
    