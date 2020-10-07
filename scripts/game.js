class Card {
    constructor(id, flipped, figure) {
        this.id = id;
        this.flipped = flipped;
        this.figure = figure;
    }
}

const FIGURES = [
    'fas fa-bath',
    'fas fa-bell',
    'fas fa-bolt',
    'fas fa-bone',
    'fas fa-bong',
    'fas fa-bug',
    'fas fa-cannabis',
    'fas fa-car-side',
    'fas fa-cheese',
    'fas fa-compact-disc',
    'fas fa-crow',
    'fas fa-database',
    'fas fa-democrat',
    'fas fa-dove',
    'fas fa-globe',
    'fas fa-hamburger',
    'fas fa-heart',
    'fas fa-ice-cream',
    'fas fa-microchip',
    'fas fa-radiation',
    'fas fa-tractor',
    'fas fa-user-secret',
    'fas fa-air-freshener',
    'fas fa-allergies',
    'fab fa-amazon',
    'fas fa-anchor',
    'fab fa-angular',
    'fab fa-apple',
    'fas fa-bacterium',
    'fas fa-bomb',
    'fas fa-bullhorn',
    'fas fa-broom',
    'fas fa-chess-queen',
    'fas fa-coins',
    'fab fa-js',
    'fab fa-python',
    'fas fa-eye',
    'fas fa-mask',
];

let cardsChosen = [];
let card;

function startGame() {

    const startGameButton = document.getElementById('start-game');

    startGameButton.addEventListener('click', () => {
        hideStartupScreen();
        createGameBoard();
        flipCard();
    });
}

function hideStartupScreen() {
    const startupScreen = document.getElementById('startup-screen');
    startupScreen.style.display = 'none';
}

function createGameBoard(x, y) {

    const gameBoard = document.getElementById('game-board');

    x = document.getElementById("columns").value;
    y = document.getElementById("rows").value;

    let cardsList = [];
    let cardsDuplicated = [];

    for (let i = 0; i < (x * y) / 2; i++) {
        cardsList.push(FIGURES[i]);
    }

    cardsDuplicated = duplicate(cardsList);

    shuffleCards(cardsDuplicated);

    for (let k = 0; k < x * y; k++) {
        card = document.createElement("div");
        card.setAttribute('id', `card-${k}`);
        card.setAttribute('class', `card ${cardsDuplicated[k]} fa-2x`);
        card.setAttribute("data-flipped", "false");

        // cardObj = new Card(`card-${k}`, false, `card ${cardsDuplicated[k]} fa-2x`);
        // console.log(`element: ${typeof cardObj.figure}`);



        gameBoard.style.gridTemplateColumns = `repeat(${x}, 120px)`;
        gameBoard.style.gridTemplateRows = `repeat(${y}, 70px)`;

        gameBoard.appendChild(card);
    }
}

function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function duplicate(array) {
    return array.concat(array).sort()
}

function addEventListeners() {
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => {
            cardsChosen.push(cards[i].getAttribute("class"));
            cards[i].setAttribute("data-flipped", "true");
        });
    }
}

function flipCard() {
    if (cardsChosen.length < 2 && card.dataset.flipped === "false") {
        addEventListeners();
        card.dataset.flipped = "true";
        // card.setAttribute("class", 'card hover is-flipped')
        // console.log(cardObjList);
        if (cardsChosen.length === 0) {

        }
        cardsChosen = [];
    }

}

function checkPair(firstChoice, secondChoice) {
    firstChoice === secondChoice ? console.log('Pair') : console.log('No Pair');
}


startGame();

/*

old approach tbe

export function addEventListeners() {
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCard(cards));
    }
}

let flipCard = (cards) => {
    cards[i].childNodes[0].style.display = 'flex';
    cardsChosen.push(card[i].childNodes[0]);
}


function checkPair(firstChoice, secondChoice) {
    firstChoice === secondChoice ? console.log('Pair') : changeStyle(firstChoice, secondChoice);
}

function changeStyle(firstElement, secondElement) {
    firstElement.style.display = 'none';
    secondElement.style.display = 'none';
}
*/
