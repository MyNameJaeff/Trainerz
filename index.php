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
    <div class="videoPlayingBox" id="videoPlayingBox">
        <video src="" id="playVideoHere">
    </div>
    <div>
    <?php
    $fileCounter = 0;
    $imageFiles = glob('./images/*.*', GLOB_BRACE);
    foreach($imageFiles as $file){
        echo "<div id='div$file' class='mediaBox'>";
        $fileType = pathinfo($file, PATHINFO_EXTENSION);
        ?>
        <button class='clickableImage' id="button<?php echo $file ?>">
            <image src="<?php echo $file; ?>" alt='image' border='0%' class='theClickableImage'>
        </button>
        </div>
        <?php
        $fileCounter++;
    }
    ?>
    </div>
    <script src="./script.js" defer></script>
</body>
</html>