<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 42 - Home</title>
</head>

<body>
  <form method='POST'>
    <fieldset>
      <legend>Login</legend>
      <label>Nome</label>
      <input type='text' name='nome' required>
      </br></br>
      <label>Senha</label>
      <input type='text' name='senha' required>
      </br>
      </br>
      <input type="submit" value="enviar" />
    </fieldset>
  </form>

  <?php
    session_start();
    $_SESSION['nome']=$_POST['nome'];

    if (isset($_SESSION['nome'])) {
      echo '<a href="./welcome.php">Continuar para o site</a>';
    }
?>
</body>

</html>