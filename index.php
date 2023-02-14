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
    $files = glob('./videos/*.*', GLOB_BRACE);
    foreach($files as $file){
        $fileType = explode('.', $file); //Dålig
        $fileType = end($fileType);
        echo("<video width='320' heigt='240' autoplay controls>"); //Försöka ta bort controls
        echo("<source src='$file' type='video/$fileType'");
        echo("</video>");
    }
    ?>
    </div>
    <div class="div1">
        <h1 id="title">Title</h1>
        <button onclick="test()">Press</button>
        <script src="./script.js"></script>
    </div>
</body>
</html>