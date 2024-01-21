if (numSides === '4') {

    var animationArea = document.createElement("div");
    animationArea.className = "four-animation";

    var rollDiv = document.createElement("div");
    rollDiv.className = "four-animation-roll";

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
        rollDiv.appendChild(diceShape);
        totalResult += randomNumber;
    }

    // Display the total result (sum of all dice rolls)
    var resultArea = document.getElementById('result');
    resultArea.textContent = 'RESULT: ' + totalResult;

    document.body.appendChild(animationArea);
    animationArea.appendChild(rollDiv);

    setTimeout(function() {
        document.body.removeChild(animationArea);
    }, 2000);


}