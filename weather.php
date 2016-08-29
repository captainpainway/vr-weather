<?php
    require_once('config.php');

    $url = "http://api.openweathermap.org/data/2.5/weather";
    $query = "?q=Orlando&units=imperial";
    $key = "&appid=$app_num";
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "{$url}{$query}{$key}");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec($ch);
    curl_close($ch);
    echo $result;
?>
