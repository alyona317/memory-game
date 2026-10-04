let firstCard = null;
let lockBoard = false;
let closeTimer = null;
let moves = 0;
let matchedPairs = 0;

const openCard = (card) => card.classList.add('is-open');
const closeCards = (...cards) => cards.forEach(card => card.classList.remove('is-open'));

export const resetGameState = function () {
    clearTimeout(closeTimer);
    closeTimer = null;
    firstCard = null;
    lockBoard = false;
    moves = 0;
    matchedPairs = 0;
};

export const getStats = () => ({ moves, matchedPairs });

export const openClickedCard = function () {
    const board = document.querySelector(".main");

    board.addEventListener('click', (e) => {
        const card = e.target.closest(".card");

        if (!card || lockBoard || card.classList.contains('is-open')) return;

        openCard(card);
        if (!firstCard) {
            firstCard = card;
            return;
        }

        const secondCard = card;
        moves++;

        if (firstCard.dataset.id === secondCard.dataset.id) {
            firstCard = null;
            matchedPairs++;
        } else {
            const prevCard = firstCard;
            firstCard = null;
            lockBoard = true;
            setTimeout(() => {
                closeCards(prevCard, secondCard);
                lockBoard = false;
                closeTimer = null;
            }, 1000);
        }
    })

}
