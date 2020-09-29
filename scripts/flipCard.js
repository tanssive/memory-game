import { checkPair } from './checkPair.js';

let cardFlipped = false;
let cardsChosen = [];
let pairs = []


export function flipCard() {

    let card = document.getElementsByClassName('card');

    for (let i = 0; i < card.length; i++) {

        let choices = [];
        card[i].addEventListener('click', () => {
            card[i].childNodes[0].style.display = 'flex';
            cardsChosen.push(card[i].childNodes[0].id);

            if (cardsChosen.length === 2) {
                if (typeof cardsChosen[0] !== 'undefined' &&
                    typeof cardsChosen[1] !== 'undefined') {

                    checkPair(cardsChosen[0], cardsChosen[1]);
                }
                cardsChosen = [];
            }
        });

    }
}