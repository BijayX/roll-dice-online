<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roll Dice</title>
    <link rel="stylesheet" href="https://cdn.rawgit.com/fponticelli/dicefont/fc6b8c47/dist/dicefont/dicefont.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="first.css">
    <link href="https://fonts.cdnfonts.com/css/marvin" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>

    <img src="./images/logo.png" class="logo-image" alt="404">

    <div class="wrapper">

        <div>
        <h3 class="title2">CHOOSE YOUR DICE</h3>
            <div class="select-wrapper">
            
            <div class="dice-amount">
            <select name="dice-amount" id="dice-amount">
                        <?php
                        for ($i = 1; $i <= 100; $i++) {
                            echo "<option value=\"$i\">" . $i . " Dice </option>";
                        }?>
            </select>
         </div>

         <div class="sided">
            <select name="sided" id="sided">
            <option value="4">4-SIDED</option>
                <option value="6">6-SIDED</option>
                <option value="8">8-SIDED</option>
                <option value="10">10-SIDED</option>
                <option value="12">12-SIDED</option>
                <option value="20">20-SIDED</option>
                <option value="colour">COLOR DICE</option>
            </select>
         </div>
    </div>

<div class="roll-area">



<!-- <div class="dice dice-one"><i class="fa-solid fa-dice-one fa-5x"></i></div>
<div class="dice dice-two"><i class="fa-solid fa-dice-two fa-5x"></i></div>
<div class="dice dice-three"><i class="fa-solid fa-dice-three fa-5x"></i></div>
<div class="dice dice-four"><i class="fa-solid fa-dice-four fa-5x"></i></div>
<div class="dice dice-five"><i class="fa-solid fa-dice-five fa-5x"></i></div>-->
<!-- <div class="dice dice-six"><i class="fa-solid fa-dice-six fa-5x"></i></div>  -->


<!-- <div class="eight-sided">
        <p class="eight-sided-number">1</p>
        </div> -->






<div class="four-sided-wrapper">

    <!-- <div class="four-sided">
        <p class="four-sided-number four-sided-one">1</p>
        </div>

    <div class="four-sided">
    <p class="four-sided-number four-sided-two">2</p>
    </div>
    
 
   <div class="four-sided">
        <p class="four-sided-number four-sided-three">3</p>
        </div> -->

        <!-- <div class="four-sided">
    <i class="bi bi-triangle"></i>
    <p class="four-sided-number">3</p>
    </div> -->

    <!-- <div class="eight-sided">
    <i class="bi bi-diamond"></i>
    </div>

    <div class="ten-sided">
        <i class="bi bi-pentagon"></i>
    </div>

    <div class="twelve-sided">
    <i class="bi bi-hexagon"></i>
    </div>

    <div class="twenty-sided">
        <i class="bi bi-octagon"></i>
    </div> -->

</div>

    </div>

        


    





    <div class="result-wrapper">
    <p id="result">RESULT</p>

    </div>
    <div class="roll-button-wrapper">
          <input class="roll-button" type="button" value="ROLL !" onclick="rollDice()">  
    </div>
         </div>
                    </div>
</div>




<script src="script.js"></script>


<script src="https://kit.fontawesome.com/e8b54f58bf.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
<script src="app.js"></script>
</body>
</html>