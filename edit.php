<?php
    // connection base
    $host = "localhost";   //127.0.0.1
    $user = "root";
    $mdp = "";
    $bd = "sardina";
    $connect = mysqli_connect($host,$user,$mdp,$bd);
    // recuperation des données
    $v1 = $_POST["nm"];
    $v2 = $_POST["age"];
    $v3 = $_POST["gender"];
    $v4 = $_POST["mail"];
    $v5 = $_POST["bac"];
    $v6 = $_POST["state"];
    $v7 = $_POST["contact"];
    $v8 = $_POST["specialization"];

    $req = "UPDATE client SET nom='$v1' and age='$v2' and gender='$v3' and email='$v4' and section='$v5'
    and state='$v6' and contact='$v7' and specialization='$v8' WHERE id='102'";
    $res = mysqli_query($connect,$req);
    if($res==true){
        echo("Modification completed successfully");
    }
    mysqli_close($connect);
?>