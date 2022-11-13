<?php
    $carros=array();
    array_push($carros, "carro_2","carro_4","carro_1","carro_3","carro_5");

    function retiraItemMeio($array,$indice){
        $arr=array_slice($array,0,$indice);
        array_pop($arr);
        $arr2=array_slice($array,$indice, sizeof($array));
        $removeItemMeio=array_merge($arr, $arr2);
        sort($removeItemMeio);
        return $removeItemMeio;
    }
    
    echo "<pre>";
    print_r(retiraItemMeio($carros, 4));
    echo"</pre>";
?>