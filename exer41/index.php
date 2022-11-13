<?php
  $carros=array();
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

  function stringWithCars($array){
    $string="";
    for($i=0; $i < sizeof($array); $i++){
        $string .= $array[$i]["marca"] . ", "; 
        $string .= $array[$i]["carro"] . ";\n"; 
    }
    return $string;
  }
  
  sort($carros);
  echo "<pre>";
  print_r(stringWithCars($carros));
  echo "<pre>";
?>