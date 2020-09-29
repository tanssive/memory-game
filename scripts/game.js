import { shuffleCards } from './shuffleCards.js';
import { flipCard } from './flipCard.js';




function startGame() {
    shuffleCards();
    flipCard();
}

startGame();