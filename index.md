<h1> marvel-game </h1>

<h2> Project Description </h2>
<p>This Marvel themed memory matcher game is a common game played with a set of cards. The game starts with all the cards face down and the two players will take turns turning over two cards at a time trying to find its pair. If the two cards selected have the same picture, the player will get a point, otherwise the cards will be turned face down again and the opposing opponent will have a chance to select two cards trying to find a pair. The winner is the person with the most cards when all the cards have been taken.</p>

<h2>How To Play</h2>
<p><ol>
  <li>Select "Begin"</li>
<li>"Player One" will begin the game. "Player One" will need to select two cards by clicking into the square and attempt to make them match.</li>
<li>If "Player One" selects two cards that match, they will collect a point. If "Player One" selects the incorrect cards, they will not collect a point.</li>
<li>After "Player One" finalizes their turn, "Player Two" is now instructed to select two cards by clicking into the square and attempt to make them match.</li>
<li>If "Player Two" selects two cards that match, they will collect a point. If "Player Two" selects the incorrect cards, they will not collect a point.</li>
<li>The player towards the conclusion of the game who collects the most points is declared the winner by having their status changed to "Winner."</li></p>
<br>
<h2>Wireframes</h2>


<h2>User Stories</h2>
<p>This is a memory matching game with a Marvel character theme built using HTML, CSS, and JavaScript.</p>
<table>
  <tr>
    <th>MVP/Stretch</th>
    <th>Description</th>
    <th>MVP</th>
  </tr>
    <td>The game consists of 16 cards with 8 pairs of Marvel characters.</td>
    <td>MVP: The cards are initially displayed face down and you can flip them over by clicking on them.</td>
    <td>MVP: You can only select two cards at a time.</td>
    <td>MVP: If the selected cards are a match, they will stay face up.</td>
    <td>MVP: If the selected cards are not a match, they will flip back over.</td>
    <td>MVP: The game ends when all pairs have been matched.</td>
    <td>Stretch: There will be two sub-pages that provide more information about the game. I.e. Developer Info, Fun Facts.
    <td>Stretch:The game will include sound for when the cards are flipped over.
    <td>Stretch: The game will include an error sound message when the players select the wrong cards.</td>
    <td>Stretch: You will be able to enter a name for your player.</td>
    <td>Stretch: An alert with a throphy announcing the winner.</td>
    <td>Stretch: The cards will turn green and shake whenever there is a match.</td>
    <td>Stretch: the cards will turn red and make an error sound if it's incorrect.</td>
    </tr>
    </table>

<h2>Extra:</h2>
<p>I plan to explore utilizing an Array to structure the cards</p>
<br>Example:</br>
<code>const cardsArray = [
  {
    'name': 'captain-america',
    'img': 'captain-america.png',
  },
  {
    'name': 'iron-man',
    'img': 'iron-man.png',
  },
  ];</code>

  

