// Player Command
// const player1 = document.getElementById("player1").value;
// const player2 = document.getElementById("player2").value;

// // Player Results

// if (matchedCards.length === cards.length) {
//   alert(`Congratulations! ${player1} and ${player2} won the game!`);
// }

// Array of Marvel character images
const images = [  "ironman",  "blackWidow", "captainAmerica",  "loki",  "blackPanther",  "kang",  "ironman2",  "blackWidow2", "captainAmerica2",  "loki2",  "blackPanther2",  "kang2",  ];

// Duplicate the images and shuffle them
//I have created a new array called shuffledImages by concatenating the images array with itself using the spread operator (...). This creates a new array that contains all the elements of images, followed by all the elements of images again.
//The sort() method is then called on the new shuffledImages array. The sort() method takes a callback function that defines the sorting order. In this case, the callback function is () => Math.random() - 1, which generates a random number between -1 and 1 and subtracts it from 1. This means that the sort() method will randomly shuffle the elements of the array.
//So, the overall effect of this code is to create a new array that contains all the elements of images twice, and then randomly shuffle the elements in the new array.
const shuffledImages = [...images, ...images].sort(() => Math.random() - 1);

//flippedCards is an empty array []. This variable is intended to hold a list of cards that have been flipped over during gameplay.
let flippedCards = [];
let matchedCards = [];

const cards = document.querySelectorAll(".card");
console.log(cards); 

cards.forEach(card => {
  card.addEventListener("click", () => {
    console.log("flip");
    // Only allow selecting two cards at a time
    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
      // Flip the card and show its front image
      card.classList.toggle("flip");
      flippedCards.push(card);
      
      // Check if the two selected cards match
      if (flippedCards.length === 2) {
        const firstImage = flippedCards[0].querySelector(".side img").getAttribute("src");
        const secondImage = flippedCards[1].querySelector(".side back img").getAttribute("src");
        
        if (firstImage === secondImage) {
          // Play a sound effect for a match
          new Audio("addAudioHere.mp3").play();
          
          matchedCards.push(...flippedCards);
          flippedCards = [];
          
          // Check if all cards are matched
          if (matchedCards.length === cards.length) {
            alert("Congratulations! You won the game!");
          }
        } else {
          // Play a sound effect for an error
          new Audio("errorSoundGoesHere.mp3").play();
          
          setTimeout(() => {
            flippedCards.forEach(card => {
              card.classList.remove("flip");
            });
            flippedCards = [];
          }, 1000);
        }
      }
    }
  });
});
