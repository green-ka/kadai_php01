<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>php課題</title>
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <?php
    // phpのコードを記述

    // ランダム
    $game = array("勝ってください","あいこにしてください","負けてください");
    $gameNum = mt_rand(0,2);
    echo "<div class='game'>".$game[$gameNum]."</div>";

    // ランダム
    $handArray = array("gu","choki","pa");
    $handNum = mt_rand(0,2);
    echo "<div class='imgArea'><img src='img/".$handArray[$handNum].".png' class='com_hand' /></div>";
    
    echo "<ul class='random_hand'>";
    echo "<li class='imgArea'><img id='gu_btn' src='img/gu.png' alt='グーの画像' class='hand' /></li>";
    echo "<li class='imgArea'><img id='choki_btn' src='img/choki.png' alt='チョキの画像' class='hand' /></li>";
    echo "<li class='imgArea'><img id='pa_btn' src='img/pa.png' alt='パーの画像' class='hand' /></li>";   
    echo "</ul>";

    echo "<div id='gb'></div>";

   ?>

    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- js -->
    <script>
      var php = {
      gameNum: "<?php echo $gameNum; ?>",
      handNum: "<?php echo $handNum; ?>",
    };
    </script>
    <script src='js/app.js'></script>
  </body>
</html>
