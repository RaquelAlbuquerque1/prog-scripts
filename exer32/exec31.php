<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 31</title>
</head>

<body>
  <?php
    $numero = 0;

    if($numero < 10){
      while($numero < 10){
        echo "Numero: $numero <br/>";
        $numero++;
      }
      return;
    }

    echo "Insira um número menor que 10.";
  ?>
</body>

</html>