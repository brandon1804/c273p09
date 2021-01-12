<?php

include "dbFunctions.php";

if (isset($_GET['id'])) {
    $ID = $_GET['id'];
    
    $country = array();
    $query = "SELECT * FROM statistics where id = $ID";
    $result = mysqli_query($link, $query);

    $row = mysqli_fetch_assoc($result);
    if(!empty($row)) {
        $country = $row;
    }
    mysqli_close($link);

    echo json_encode($country);
}
?>
