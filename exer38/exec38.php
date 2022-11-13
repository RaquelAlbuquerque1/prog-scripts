<?php
    $carros=array();
    array_push($carros, "carro_1","carro_2","carro_3","carro_4","carro_5");
   
    echo "<pre>";
    echo "_______vamos remover o carro 3_______\n"; 
    print_r($carros);
    $carro5=array_pop($carros);
    echo "\nremovendo " .$carro5. "<br />";
    
    
    print_r($carros);
    $carro4=array_pop($carros);
    echo "\nremovendo " .$carro4. "<br />";
    print_r($carros);

    $carro3=array_pop($carros);
    echo "\nremovendo " .$carro3. "<br />";
    print_r($carros);

    echo "\ninserindo " .$carro4. "<br />";
    array_push($carros, $carro4);
    print_r($carros);

    echo "\ninserindo " .$carro5. "<br />";
    array_push($carros, $carro5);
    
    print_r($carros);
    echo "\ncarro ".$carro3. " removido com sucesso";

    echo"</pre>";
?>