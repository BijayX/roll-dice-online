

document.addEventListener("DOMContentLoaded", function () {
    var diceIcons = document.querySelectorAll('.dice-icon');
    

    function showHideIcons(index) {
        if (index < diceIcons.length) {
            var randomZIndex = Math.floor(Math.random() * 10); // Adjust the range as needed

            setTimeout(function () {
                diceIcons[index].style.zIndex = randomZIndex;
                diceIcons[index].style.opacity = 1;

                setTimeout(function () {
                    diceIcons[index].style.opacity = 0;

                    if (index === diceIcons.length - 1) {
                        setTimeout(function () {
                            window.location.href = "home.php";
                        }, Math.floor(Math.random() * 100) + 50); // Adjusted delay
                    }

                    showHideIcons(index + 1);
                }, Math.floor(Math.random() * 100) + 50); // Adjusted delay for hiding
            }, Math.floor(Math.random() * 100) + 50 * index); // Adjusted delay for showing
        }
    }
    showHideIcons(0);
});
