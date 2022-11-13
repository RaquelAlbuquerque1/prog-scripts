<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 33</title>
</head>

<body>
  <?php
      $tabela = '<table border="1">';
      for($i=1; $i < 21; $i++){
        $tabela .= "<tr>"; 
        for($j=1; $j < 7; $j++){
          $tabela .= '<td>'.$i ."/" . $j . "</td>"; 
        }
        $tabela .= "</tr>";
      }
      $tabela .= '</table>';

      echo $tabela;
  ?>
</body>

</html>