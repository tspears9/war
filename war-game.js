class Card {
  constructor(suit, rank, value) {
      this.suit = suit;
      this.rank = rank;
      this.value = value;
  }
}
class Deck {
  constructor() {
      this.cards = [];    
  }      
  createDeck() {
      let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
      let ranks = ['2', '3', '4', '5', '6', '7', '8', '9','10', 'jack', 'queen', 'king', 'ace' ];
      let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      for (let i = 0; i < suits.length; i++) {
          for (let j = 0; j < ranks.length; j++) {
              this.cards.push(new Card(suits[i], ranks[j], values[j]));
          }
        }
      }
  shuffleDeck() {
      for (let i = this.cards.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = this.cards[i];
          this.cards[i] = this.cards[j];
          this.cards[j] = temp;
      } 
        }
  
} 
  
const d = new Deck();

d.createDeck();
d.shuffleDeck(); 
//console.log(d.cards); 


class Player {
  constructor(name) {
      this.playerName = name;
      this.playerCards = [];
      this.playerScore = 0
  }
}  

class Board {
  constructor() {
      this.cardsInMiddle = [];
      this.players = [];
  }
  start(player1, player2) {
      this.players.push(new Player(player1));
      this.players.push(new Player(player2));
      let d = new Deck();
      d.createDeck();
      d.shuffleDeck();     
      this.players[0].playerCards = d.cards.slice(0, 26);
      this.players[1].playerCards = d.cards.slice(26, 52);
  }
}

function roundOutput(player1,player2, roundNum) {
  console.log(`${player1.playerName} plays: ${player1.playerCards[roundNum].value} of ${player1.playerCards[roundNum].suit}
`);
console.log(`${player2.playerName} plays: ${player2.playerCards[roundNum].value} of ${player2.playerCards[roundNum].suit}
`);
}


function playRoundResults(player1, player2) {
 
  for (let i = 0; i < player1.playerCards.length; i++) {
      roundOutput(player1, player2, i);
    if (player1.playerCards[i].value > player2.playerCards[i].value) {
      player1.playerScore += 1;
      console.log(`${player1.playerName} WINS THIS ROUND!!`);
    } else if (player1.playerCards[i].value < player2.playerCards[i].value) {
      player2.playerScore += 1;
      console.log(`${player2.playerName} WINS THIS ROUND!!`);
    } else {
      console.log("PLAYERS TIED!!! NO POINTS AWARDED.");
    }
  }
}

function finalTally(player1, player2) {
  if (player1.playerScore > player2.playerScore) {
    console.log(`cONGRATULATIONS ${player1.playerName} WINS THE GAME WITH A FINAL SCORE OF: ${player1.playerScore}!!!`);
  } else if (player1.playerScore < player2.playerScore) {
    console.log(`CONGRATULATIONS ${player2.playerName} WINS THE GAME WITH A FINAL SCORE OF: ${player2.playerScore}!!!`);
  } else {
    console.log(`WHAT ARE THE ODDS? ${player1.playerName} AND ${player2.playerName} HAVE A TIE!!!`);
  }
}



let gameBoard = new Board();
gameBoard.start('BONNIE', 'CLYDE');
playRoundResults(gameBoard.players[0], gameBoard.players[1]);
finalTally(gameBoard.players[0], gameBoard.players[1])
console.log(gameBoard.players);



