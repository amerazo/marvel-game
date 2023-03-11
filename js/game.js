
// Create players and added an event listener for display name function

const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");

const player1Display = document.getElementById("player1-display");
const player2Display = document.getElementById("player2-display");

player1Input.addEventListener("input", (event) => {
  player1Display.textContent = event.target.value;
});

player2Input.addEventListener("input", (event) => {
  player2Display.textContent = event.target.value;
});

// Initialize score counters. 
let player1ScoreCount = 0;
//This line initializes the score counter for player 2 to 0. Placed it as let and 0 because it will change.
let player2ScoreCount = 0;

//This line selects the HTML element with the ID of "player1-score" and assigns it to the variable player1ScoreDisplay.
const player1ScoreDisplay = document.getElementById("player1-score");
const player2ScoreDisplay = document.getElementById("player2-score");

// my array of the card images. 
const images = [
  "ironman",
  "blackWidow",
  "captainAmerica",
  "loki",
  "blackPanther",
  "kang",
  "ironman2",
  "blackWidow2",
  "captainAmerica2",
  "loki2",
  "blackPanther2",
  "kang2",
];
// string concatenation function ... reference "https://www.scaler.com/topics/string-concatenation-javascript/"
//Created a new array called shuffledImages by concatenating images with itself and shuffling the order of the elements.

const shuffledImages = [...images, ...images].sort(() => Math.random() - 0.5);

// created array literals. This initializes two arrays for tracking flipped and matched cards.
let flippedCards = [];
let matchedCards = [];

//This line initializes the score counter for the current player to 0.
let currentPlayerScoreCount = 0;

// Selcted all HTML elements with the class "card" and assigned them to the variable cards.
const cards = document.querySelectorAll(".card");

//This line adds an event listener to each card in the cards Node List. When the user clicks on a card, the callback function is called.
//Reference - used W3schools terminal function
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
      //This line adds the "flip" class to the clicked card, causing it to flip over.
      //flip function is embedded in JavaScript. Reference "W3Resource"
      card.classList.add("flip");
      //Add the clicked card to the flippedCards array.
      flippedCards.push(card);
      //Line 66 - adds the clicked card to the flippedCards array.

      //Check if two cards have been flipped over.
      if (flippedCards.length === 2) {
      //Retrieved the source attribute of the image element within the .side.back element in HTML of the first card in the flippedCards array.
      //Reference: https://youtu.be/3oOKAJTD2F8
        const firstImage = flippedCards[0].querySelector(".side.back img").getAttribute("src");
        const secondImage = flippedCards[1].querySelector(".side.back img").getAttribute("src");

        //---- AUDIO SECTION ----
        //77,78, compare the two flipped cards to see if they match. If they do match, idea is tp play a sound effect.
        //not enough time to fix audio. would need to add it to a local file path etc.
        if (firstImage === secondImage) {
          new Audio().play("https://freesound.org/s/561563/");
          matchedCards.push(...flippedCards);
          flippedCards = [];

          currentPlayerScoreCount++;
          document.getElementById("player" + currentPlayer + "-score").textContent = currentPlayerScoreCount;
        } else {
          new Audio("errorSoundGoesHere.mp3").play();
          setTimeout(() => {
            flippedCards.forEach((card) => {
              card.classList.remove("flip");
            });
            flippedCards = [];
            //---- AUDIO SECTION ----
            
            //currentPlayer variable being updated to the correct score depending on matches.
            //updated the players name so they can get their correct points.
            if (currentPlayer === 1) {
              currentPlayer = 2;
              currentPlayerScoreCount = 0;
              document.getElementById("player1-name").textContent = player1Input.value;
              document.getElementById("player2-name").textContent = player2Input.value;
            } else {
              currentPlayer = 1;
              currentPlayerScoreCount = 0;
              document.getElementById("player1-name").textContent = player1Input.value;
              document.getElementById("player2-name").textContent = player2Input.value;
            }
            //The 1000 is a delay in milliseconds for the setTimeout() function to wait before executing the callback function. 
            //In this case, after a non-matching pair of cards is flipped, the code waits for 1000 milliseconds (or 1 second) before executing the callback function to flip the cards back over and change the current player's turn.
            //Reference "stack overflow"
          }, 1000);
        }
      }
    }
  });
});
//update the players points. reference html input name.
let currentPlayer = 1;
document.getElementById("player1-name").textContent = player1Input.value;
document.getElementById("player2-name").textContent = player2Input.value;
