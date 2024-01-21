
function rollDice() {
    var numDice = document.getElementById('dice-amount').value;
    var numSides = document.getElementById('sided').value;

    var fourSidedArea = document.querySelector('.four-sided-wrapper');
    fourSidedArea.innerHTML = '';

    var totalResult = 0;

    var rollSound = new Audio('./sounds/music.ogg');
    rollSound.load();

    setTimeout(function() {
        rollSound.play();
    }, 500);


    var resultArea = document.getElementById('result');
    if (numDice > '1' && numSides === 'colour') {
        resultArea.style.display = "none";
    }else{
        resultArea.style.display = "flex";
    }

    if (numSides === '4') {
        for (let i = 0; i < numDice; i++) {
            let randomNumber = Math.floor(Math.random() * 4) + 1;
    
            var diceDiv = document.createElement("div");
            diceDiv.className = "four-sided";
    
            var diceShape = document.createElement("i");
            diceShape.className = "bi bi-triangle";
    
            var diceNumber = document.createElement("p");
            diceNumber.className = "four-sided-number";
    
            diceDiv.appendChild(diceShape);
            diceDiv.appendChild(diceNumber);
            diceNumber.innerHTML = randomNumber;
    
            // Append each four-sided dice to the container
            fourSidedArea.appendChild(diceDiv);
    
            totalResult += randomNumber;
        }
    
        // Display the total result (sum of all dice rolls)
        var resultArea = document.getElementById('result');
        resultArea.textContent = 'RESULT: ' + totalResult;

        rollSound.play();

        fourAnimation(numDice, 1700);
    } else if (numSides === '6') {
        
        for (let i = 0; i < numDice; i++) {
            const diceClasses = ['dice-one', 'dice-two', 'dice-three', 'dice-four', 'dice-five', 'dice-six'];
            const randomIndex = Math.floor(Math.random() * diceClasses.length);
        
            var diceDiv = document.createElement("div");
            diceDiv.className = "dice " + diceClasses[randomIndex];
        
            var diceIcon = document.createElement("i");
            diceIcon.className = "fa-solid fa-" + diceClasses[randomIndex] + " fa-5x icon";
        
            diceDiv.appendChild(diceIcon);
            fourSidedArea.appendChild(diceDiv);
        
            totalResult += randomIndex + 1;
        
            // Set the color for the recently created dice element
            diceDiv.style.color = '#ffffff';
            fourSidedArea.style.gap = '1rem';
        }
        

        var resultArea = document.getElementById('result');
        resultArea.textContent = 'RESULT: ' + totalResult;


        sixAnimation(numDice);

    } else if (numSides === '8') {
        for (let i = 0; i < numDice; i++) {
            let randomNumber = Math.floor(Math.random() * 8) + 1;
    
            var diceDiv = document.createElement("div");
            diceDiv.className = "eight-sided";
    
            var diceShape = document.createElement("i");
            diceShape.className = "bi bi-diamond";
    
            var diceNumber = document.createElement("p");
            diceNumber.className = "eight-sided-number";
    
            diceDiv.appendChild(diceShape);
            diceDiv.appendChild(diceNumber);
            diceNumber.innerHTML = randomNumber;
    
            // Append each eight-sided dice to the container
            fourSidedArea.appendChild(diceDiv);
    
            totalResult += randomNumber;
        }
    
        // Display the total result (sum of all dice rolls)
        var resultArea = document.getElementById('result');
        resultArea.textContent = 'RESULT: ' + totalResult;

        eightAnimation(numDice, 1700);
    
}else if (numSides === '10') {
    for (let i = 0; i < numDice; i++) {
        let randomNumber = Math.floor(Math.random() * 8) + 1;

        var diceDiv = document.createElement("div");
        diceDiv.className = "ten-sided";

        var diceShape = document.createElement("i");
        diceShape.className = "bi bi-pentagon";

        var diceNumber = document.createElement("p");
        diceNumber.className = "ten-sided-number";

        diceDiv.appendChild(diceShape);
        diceDiv.appendChild(diceNumber);
        diceNumber.innerHTML = randomNumber;

        // Append each eight-sided dice to the container
        fourSidedArea.appendChild(diceDiv);

        totalResult += randomNumber;
    }

    // Display the total result (sum of all dice rolls)
    var resultArea = document.getElementById('result');
    resultArea.textContent = 'RESULT: ' + totalResult;

    tenAnimation(numDice, 1700);

}
else if (numSides === '12') {
    for (let i = 0; i < numDice; i++) {
        let randomNumber = Math.floor(Math.random() * 8) + 1;

        var diceDiv = document.createElement("div");
        diceDiv.className = "twelve-sided";

        var diceShape = document.createElement("i");
        diceShape.className = "bi bi-hexagon";

        var diceNumber = document.createElement("p");
        diceNumber.className = "twelve-sided-number";

        diceDiv.appendChild(diceShape);
        diceDiv.appendChild(diceNumber);
        diceNumber.innerHTML = randomNumber;

        // Append each eight-sided dice to the container
        fourSidedArea.appendChild(diceDiv);

        totalResult += randomNumber;
    }

    // Display the total result (sum of all dice rolls)
    var resultArea = document.getElementById('result');
    resultArea.textContent = 'RESULT: ' + totalResult;

    twelveAnimation(numDice, 1700);
}
else if (numSides === '20') {
    for (let i = 0; i < numDice; i++) {
        let randomNumber = Math.floor(Math.random() * 8) + 1;

        var diceDiv = document.createElement("div");
        diceDiv.className = "twenty-sided";

        var diceShape = document.createElement("i");
        diceShape.className = "bi bi-octagon";

        var diceNumber = document.createElement("p");
        diceNumber.className = "twenty-sided-number";

        diceDiv.appendChild(diceShape);
        diceDiv.appendChild(diceNumber);
        diceNumber.innerHTML = randomNumber;

        // Append each eight-sided dice to the container
        fourSidedArea.appendChild(diceDiv);

        totalResult += randomNumber;
    }

    // Display the total result (sum of all dice rolls)
    var resultArea = document.getElementById('result');
    resultArea.textContent = 'RESULT: ' + totalResult;

    twentyAnimation(numDice, 1700);
}
else if (numSides === 'colour') {
    
    
    if(numDice === '1'){
    var colorNames = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Purple', 'Maroon', 'Gray', 'Fuchsia'];

    for (let i = 0; i < numDice; i++) {
        var diceDiv = document.createElement("div");
        diceDiv.className = "dice";

        var diceIcon = document.createElement("i");
        diceIcon.className = "fa-solid fa-dice-one fa-5x icon";
        diceDiv.appendChild(diceIcon);
        fourSidedArea.appendChild(diceDiv);

        // Generate a new random color for each dice inside the loop
        const randomIndex = Math.floor(Math.random() * colorNames.length);
        var randomColorName = colorNames[randomIndex];

        diceDiv.style.color = randomColorName;
    }

    // The following part remains the same

    var resultArea = document.getElementById('result');
    resultArea.textContent = 'RESULT: ' + randomColorName;

    colorAnimation(numDice);
    }else if(numDice > '1'){
            var colorNames = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Purple', 'Maroon', 'Gray', 'Fuchsia'];
        
            for (let i = 0; i < numDice; i++) {
                var diceDiv = document.createElement("div");
                diceDiv.className = "dice";
        
                var diceIcon = document.createElement("i");
                diceIcon.className = "fa-solid fa-dice-one fa-5x icon";
                diceDiv.appendChild(diceIcon);
                fourSidedArea.appendChild(diceDiv);
        
                // Generate a new random color for each dice inside the loop
                const randomIndex = Math.floor(Math.random() * colorNames.length);
                var randomColorName = colorNames[randomIndex];
        
                diceDiv.style.color = randomColorName;
            }

        

            colorAnimation(numDice);
    }

}else {
        document.getElementById('result').innerHTML = 'Result:' + totalResult;
    }
}

function fourAnimation(numDice, duration) {
    console.log("Four animation..");

    var animationArea = document.createElement("div");
    animationArea.className = "four-animation";

    var rollDiv = document.createElement("div");
    rollDiv.className = "four-animation-roll";

    var rollTitle = document.createElement("h2");
        rollTitle.className = "title4";
        rollTitle.innerHTML = "FINGERS CROSSED !";

        animationArea.appendChild(rollTitle);

    // Create four-sided-number divs initially
    for (let i = 0; i < numDice; i++) {
        var diceDiv = document.createElement("div");
        diceDiv.className = "four-roll";

        var diceShape = document.createElement("i");
        diceShape.className = "bi bi-triangle";

        var diceNumber = document.createElement("p");
        diceNumber.className = "four-sided-number";

        diceDiv.appendChild(diceShape);
        diceDiv.appendChild(diceNumber);
        rollDiv.appendChild(diceDiv);
    }

    function updateDiceNumbers() {
        for (let i = 0; i < numDice; i++) {
            let randomNumber = Math.floor(Math.random() * 4) + 1; // Adjust the range as needed
            var diceDiv = rollDiv.children[i];
            var diceNumber = diceDiv.querySelector(".four-sided-number");
            diceNumber.innerHTML = randomNumber;
        }
    }

    // Set an interval to update dice numbers every 100 milliseconds (adjust as needed)
    var intervalId = setInterval(updateDiceNumbers, 100);

    animationArea.appendChild(rollDiv);
    document.body.appendChild(animationArea);

    // Clear the interval after the specified duration
    setTimeout(function () {
        clearInterval(intervalId);
        document.body.removeChild(animationArea);
    }, duration);
}





// for eight sided animation

function eightAnimation(numDice, duration) {


    var animationArea = document.createElement("div");
    animationArea.className = "four-animation";

    var rollDiv = document.createElement("div");
    rollDiv.className = "four-animation-roll";

    var rollTitle = document.createElement("h2");
        rollTitle.className = "title4";
        rollTitle.innerHTML = "FINGERS CROSSED !";

        animationArea.appendChild(rollTitle);

    // Create four-sided-number divs initially
    for (let i = 0; i < numDice; i++) {
        var diceDiv = document.createElement("div");
        diceDiv.className = "four-roll";

        var diceShape = document.createElement("i");
        diceShape.className = "bi bi-diamond";

        var diceNumber = document.createElement("p");
        diceNumber.className = "four-sided-number";

        diceDiv.appendChild(diceShape);
        diceDiv.appendChild(diceNumber);
        rollDiv.appendChild(diceDiv);
    }

    function updateDiceNumbers() {
        for (let i = 0; i < numDice; i++) {
            let randomNumber = Math.floor(Math.random() * 8) + 1; // Adjust the range as needed
            var diceDiv = rollDiv.children[i];
            var diceNumber = diceDiv.querySelector(".four-sided-number");
            diceNumber.innerHTML = randomNumber;
        }
    }

    // Set an interval to update dice numbers every 100 milliseconds (adjust as needed)
    var intervalId = setInterval(updateDiceNumbers, 100);

    animationArea.appendChild(rollDiv);
    document.body.appendChild(animationArea);

    // Clear the interval after the specified duration
    setTimeout(function () {
        clearInterval(intervalId);
        document.body.removeChild(animationArea);
    }, duration);
}


// for ten sided dice


function tenAnimation(numDice, duration) {


    var animationArea = document.createElement("div");
    animationArea.className = "four-animation";

    var rollDiv = document.createElement("div");
    rollDiv.className = "four-animation-roll";

    var rollTitle = document.createElement("h2");
        rollTitle.className = "title4";
        rollTitle.innerHTML = "FINGERS CROSSED !";

        animationArea.appendChild(rollTitle);

    // Create four-sided-number divs initially
    for (let i = 0; i < numDice; i++) {
        var diceDiv = document.createElement("div");
        diceDiv.className = "four-roll";

        var diceShape = document.createElement("i");
        diceShape.className = "bi bi-pentagon";

        var diceNumber = document.createElement("p");
        diceNumber.className = "four-sided-number";

        diceDiv.appendChild(diceShape);
        diceDiv.appendChild(diceNumber);
        rollDiv.appendChild(diceDiv);
    }

    function updateDiceNumbers() {
        for (let i = 0; i < numDice; i++) {
            let randomNumber = Math.floor(Math.random() * 10) + 1; // Adjust the range as needed
            var diceDiv = rollDiv.children[i];
            var diceNumber = diceDiv.querySelector(".four-sided-number");
            diceNumber.innerHTML = randomNumber;
        }
    }

    // Set an interval to update dice numbers every 100 milliseconds (adjust as needed)
    var intervalId = setInterval(updateDiceNumbers, 100);

    animationArea.appendChild(rollDiv);
    document.body.appendChild(animationArea);

    // Clear the interval after the specified duration
    setTimeout(function () {
        clearInterval(intervalId);
        document.body.removeChild(animationArea);
    }, duration);
}


// for twelve sided animation

function twelveAnimation(numDice, duration) {


    var animationArea = document.createElement("div");
    animationArea.className = "four-animation";

    var rollDiv = document.createElement("div");
    rollDiv.className = "four-animation-roll";

    var rollTitle = document.createElement("h2");
        rollTitle.className = "title4";
        rollTitle.innerHTML = "FINGERS CROSSED !";

        animationArea.appendChild(rollTitle);

    // Create four-sided-number divs initially
    for (let i = 0; i < numDice; i++) {
        var diceDiv = document.createElement("div");
        diceDiv.className = "four-roll";

        var diceShape = document.createElement("i");
        diceShape.className = "bi bi-hexagon";

        var diceNumber = document.createElement("p");
        diceNumber.className = "four-sided-number";

        diceDiv.appendChild(diceShape);
        diceDiv.appendChild(diceNumber);
        rollDiv.appendChild(diceDiv);
    }

    function updateDiceNumbers() {
        for (let i = 0; i < numDice; i++) {
            let randomNumber = Math.floor(Math.random() * 12) + 1; // Adjust the range as needed
            var diceDiv = rollDiv.children[i];
            var diceNumber = diceDiv.querySelector(".four-sided-number");
            diceNumber.innerHTML = randomNumber;
        }
    }

    // Set an interval to update dice numbers every 100 milliseconds (adjust as needed)
    var intervalId = setInterval(updateDiceNumbers, 100);

    animationArea.appendChild(rollDiv);
    document.body.appendChild(animationArea);

    // Clear the interval after the specified duration
    setTimeout(function () {
        clearInterval(intervalId);
        document.body.removeChild(animationArea);
    }, duration);
}


// for twenty dice animation

function twentyAnimation(numDice, duration) {


    var animationArea = document.createElement("div");
    animationArea.className = "four-animation";

    var rollDiv = document.createElement("div");
    rollDiv.className = "four-animation-roll";

    var rollTitle = document.createElement("h2");
        rollTitle.className = "title4";
        rollTitle.innerHTML = "FINGERS CROSSED !";

        animationArea.appendChild(rollTitle);

    // Create four-sided-number divs initially
    for (let i = 0; i < numDice; i++) {
        var diceDiv = document.createElement("div");
        diceDiv.className = "four-roll";

        var diceShape = document.createElement("i");
        diceShape.className = "bi bi-octagon";

        var diceNumber = document.createElement("p");
        diceNumber.className = "four-sided-number";

        diceDiv.appendChild(diceShape);
        diceDiv.appendChild(diceNumber);
        rollDiv.appendChild(diceDiv);
    }

    function updateDiceNumbers() {
        for (let i = 0; i < numDice; i++) {
            let randomNumber = Math.floor(Math.random() * 20) + 1; // Adjust the range as needed
            var diceDiv = rollDiv.children[i];
            var diceNumber = diceDiv.querySelector(".four-sided-number");
            diceNumber.innerHTML = randomNumber;
        }
    }

    // Set an interval to update dice numbers every 100 milliseconds (adjust as needed)
    var intervalId = setInterval(updateDiceNumbers, 100);

    animationArea.appendChild(rollDiv);
    document.body.appendChild(animationArea);

    // Clear the interval after the specified duration
    setTimeout(function () {
        clearInterval(intervalId);
        document.body.removeChild(animationArea);
    }, duration);
}


// for color animation

function colorAnimation(numDice) {
    var animationArea = document.createElement("div");
    animationArea.className = "four-animation";

    var rollDiv = document.createElement("div");
    rollDiv.className = "four-animation-roll";

    var rollTitle = document.createElement("h2");
    rollTitle.className = "title4";
    rollTitle.innerHTML = "FEELING LUCKY !";

    animationArea.appendChild(rollTitle);

    var diceDiv = document.createElement("div");
    diceDiv.className = "four-roll";

    for (let i = 0; i < numDice; i++) {
        var diceShape = document.createElement("i");
        diceShape.className = "fa-solid fa-dice-one color-roll";

        var diceNumber = document.createElement("p");
        diceNumber.className = "four-sided-number";

        diceDiv.appendChild(diceShape);
        diceDiv.appendChild(diceNumber);
    }

    rollDiv.appendChild(diceDiv);
    animationArea.appendChild(rollDiv);
    document.body.appendChild(animationArea);

    setTimeout(function () {
        document.body.removeChild(animationArea);
    }, 1700);
}



// for six sided dice 

function sixAnimation(numDice) {
    var animationArea = document.createElement("div");
    animationArea.className = "four-animation";

    var rollDiv = document.createElement("div");
    rollDiv.className = "four-animation-roll";

    var rollTitle = document.createElement("h2");
    rollTitle.className = "title4";
    rollTitle.innerHTML = "FINGERS CROSSED !";

    var diceClassNames = ["fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six"];

    var intervalId;
    var counter = 0;

    function showRandomDice() {
        // Clear previous dice
        rollDiv.innerHTML = "";

        // Show random dice icon
        for (let i = 0; i < numDice; i++) {
            var randomIndex = Math.floor(Math.random() * 6);
            var diceIcon = document.createElement("i");
            diceIcon.className = "six-roll fa-solid " + diceClassNames[randomIndex];
            rollDiv.appendChild(diceIcon);
        }

        // Increment counter
        counter++;

        // Stop after a certain number of iterations (adjust as needed)
        if (counter === 15) {
            clearInterval(intervalId);
        }
    }

    // Set up the animation loop
    intervalId = setInterval(showRandomDice, 200); // Adjust the interval duration as needed

    animationArea.appendChild(rollTitle);
    animationArea.appendChild(rollDiv);

    document.body.appendChild(animationArea);


    setTimeout(function () {
        document.body.removeChild(animationArea);
    }, 2000);
}
