<?php
    $carros = array();
    $carros[0]["marca"]="Ferrari";
    $carros[0]["carro"]="f40";
    $carros[1]["marca"]="Lamborguini";
    $carros[1]["carro"]="huraca";
    $carros[2]["marca"]="Volkswagen";
    $carros[2]["carro"]="jetta";
    $carros[3]["marca"]="Meca";
    $carros[3]["carro"]="cls";
    $carros[4]["marca"]="Ford";
    $carros[4]["carro"]="mustang";
    $carros[4]["marca"]="Chevrolet";
    $carros[4]["carro"]="camaro";

    echo "<p><b>Carros na ordem de inserção(desordenados)</b></p>";
    echo "<pre>";
    print_r($carros);
    sort($carros);
    echo "<br>";
    echo "<br>";
    echo "<p><b>Carros ordenados(em tabela)</b></p>";
    $tabela = '<table border="1">';
      for($i=0; $i < sizeof($carros); $i++){
        $tabela .= "<tr>"; 
          $tabela .= '<td>'.$carros[$i]["marca"] . "</td>"; 
          $tabela .= '<td>' . $carros[$i]["carro"] . "</td>"; 
        $tabela .= "</tr>";
      }
    $tabela .= '</table>';
    echo $tabela;
    echo"</pre>";
?>