document.addEventListener("DOMContentLoaded", function () {
    const player1ChoiceElement = document.getElementById("player1Choice");
    const player2ChoiceElement = document.getElementById("player2Choice");
    const resultElement = document.getElementById("result");
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function () {
        // Get two random numbers between 1 and 3 inclusive
        const player1Number = Math.floor(Math.random() * 3) + 1;
        const player2Number = Math.floor(Math.random() * 3) + 1;

        // Define the mapping of numbers to choices
        const choices = {
            1: "img/rock",
            2: "img/scissor",
            3: "img/paper"
        };

        // Set the image sources and result text based on random numbers
        player1ChoiceElement.setAttribute("src", choices[player1Number] + ".jpg");
        player2ChoiceElement.setAttribute("src", choices[player2Number] + ".jpg");

        // Determine the winner
        if (player1Number === player2Number) {
            resultElement.textContent = "It's a tie!";
        } else if (
            (player1Number === 1 && player2Number === 3) ||
            (player1Number === 2 && player2Number === 1) ||
            (player1Number === 3 && player2Number === 2)
        ) {
            resultElement.textContent = "Player 1 wins!";
        } else {
            resultElement.textContent = "Player 2 wins!";
        }
    });
});
