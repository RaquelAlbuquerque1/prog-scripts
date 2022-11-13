<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-14">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 36</title>
</head>

<body>
  <?php


    
    function conta($number1, $number2, $sinal){
      if($sinal === "-"){
        return $number1 - $number2;
      }
      else if($sinal === "+"){
        return $number1 + $number2;
      }
      else if ($sinal === "*"){
        return $number1 * $number2;
      }
      else if ($sinal === "/"){
        return  $number1 / $number2;
      }
      else{
         echo "false";
      }
    }

    echo conta(3,3, "*");
  ?>
</body>

</html>