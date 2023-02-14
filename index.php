<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Trainerz</title>
</head>
<body>
    <div>
    <?php
    $fileCounter = 0;
    $imageFiles = glob('./images/*.*', GLOB_BRACE);
    foreach($imageFiles as $file){
        $fileType = explode('.', $file); //Dålig
        $fileType = end($fileType);
        echo("<button onclick='test()' class='clickableImage'>");
            echo("<image src='$file' alt='image' border='0%' class='theClickableImage'");
        echo("</button>");
    }
    $videoFiles = glob('./videos/*.*', GLOB_BRACE);
    /*foreach($videoFiles as $file){
        $fileType = explode('.', $file); //Dålig
        $fileType = end($fileType);
        echo("<video width='320' heigt='240' poster='./images/trainerz_logo.jpg' controls>"); //Försöka ta bort controls
        echo("<source src='$file' type='video/$fileType'");
        echo("</video>");
    }*/
    ?>
    </div>
    <div class="div1">
        <h1 id="title">Title</h1>
        <button onclick="test()">Press</button>
    </div>
    <script src="./script.js"></script>
</body>
</html>