<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-14">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 35</title>
</head>

<body>
  <?php
    $email = "TESTE@dasdasdas.com";
    $email_validation_regex = '/^\\S+@\\S+\\.\\S+$/'; 

    if(preg_match($email_validation_regex, $email) == 1){
        if(strlen($email) > 30){
          echo "Email é muito longo";
        }else{
          echo strtolower($email);
        }
    }else {
       echo "Email inválido";
    }
  ?>
</body>

</html>