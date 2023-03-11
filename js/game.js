


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

// Initialize score counters
let player1ScoreCount = 0;
let player2ScoreCount = 0;

const player1ScoreDisplay = document.getElementById("player1-score");
const player2ScoreDisplay = document.getElementById("player2-score");

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

const shuffledImages = [...images, ...images].sort(() => Math.random() - 0.5);

let flippedCards = [];
let matchedCards = [];

let currentPlayerScoreCount = 0;

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
      card.classList.add("flip");
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        const firstImage = flippedCards[0].querySelector(".side.back img").getAttribute("src");
        const secondImage = flippedCards[1].querySelector(".side.back img").getAttribute("src");

        if (firstImage === secondImage) {
          new Audio("addAudioHere.mp3").play();
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
          }, 1000);
        }
      }
    }
  });
});

let currentPlayer = 1;
document.getElementById("player1-name").textContent = player1Input.value;
document.getElementById("player2-name").textContent = player2Input.value;
