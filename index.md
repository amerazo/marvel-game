marvel-game

Project Description
This Marvel themed memory matcher game is a common game played with a set of cards. The game starts with all the cards face down and the two players will take turns turning over two cards at a time trying to find its pair. If the two cards selected have the same picture, the player will get a point, otherwise the cards will be turned face down again and the opposing opponent will have a chance to select two cards trying to find a pair. The winner is the person with the most cards when all the cards have been taken.

How To Play
Select "Begin"
"Player One" will begin the game. "Player One" will need to select two cards by clicking into the square and attempt to make them match.
If "Player One" selects two cards that match, they will collect a point. If "Player One" selects the incorrect cards, they will not collect a point.
After "Player One" finalizes their turn, "Player Two" is now instructed to select two cards by clicking into the square and attempt to make them match.
If "Player Two" selects two cards that match, they will collect a point. If "Player Two" selects the incorrect cards, they will not collect a point.
The player towards the conclusion of the game who collects the most points is declared the winner by having their status changed to "Winner."
Wireframes


User Stories
This is a memory matching game with a Marvel character theme built using HTML, CSS, and JavaScript.
MVP/Stretch
Description
MVP
The game consists of 16 cards with 8 pairs of Marvel characters.
MVP
The cards are initially displayed face down and you can flip them over by clicking on them.
MVP
You can only select two cards at a time.
MVP
If the selected cards are a match, they will stay face up.
MVP
If the selected cards are not a match, they will flip back over.
MVP
The game ends when all pairs have been matched.
Stretch
There will be two sub-pages that provide more information about the game. I.e. Developer Info, Fun Facts.
Stretch
The game will include sound for when the cards are flipped over.
Stretch
The game will include an error sound message when the players select the wrong cards.
Stretch
You will be able to enter a name for your player.
Stretch
An alert with a throphy announcing the winner.
Stretch
The cards will turn green and shake whenever there is a match.
Stretch
the cards will turn red and make an error sound if it's incorrect.

Extra:
I plan to explore utilizing an Array to structure the cards. Example:
const cardsArray = [
  {
    'name': 'captain-america',
    'img': 'captain-america.png',
  },
  {
    'name': 'iron-man',
    'img': 'iron-man.png',
  },
  ];

