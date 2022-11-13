<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 29</title>
</head>

<body>
  <?php
    //Pega o numero da url
    $numero = $_GET["numero"];

    if($numero%2 == 0) {
      echo "<h4>Este número é par!</h4>";
      return;
    }

    switch($numero){
      case 1: 
        echo "<h4>1 não é primo, nem um número composto.</h4>";
        break;
      case 3: 
        echo "<h4>3 é usado como pedido de socorro. Para pedir socorro no deserto ou em alguma outra região, basta fazer três fogueiras, porque três é um código mundial.</h4>";
        break;
      case 9: 
        echo "<h4>Em Roma, os meninos recebiam seu nome no nono dia de vida.</h4>";
        break;
      default: 
        echo "<h4>Este número é ímpar.</h4>";
        break;
    }
  ?>
</body>

</html>