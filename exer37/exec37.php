<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-14">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 37</title>
</head>

<body>
  <?php
      function cortaTexto(&$param, $pontoDeCorte){
        echo $param = substr($param, $pontoDeCorte);
      }

      $var = "Texto";
      echo cortaTexto($var, 2);
  ?>
</body>

</html>