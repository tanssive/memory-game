export function shuffleCards() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
}