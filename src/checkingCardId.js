let firstCard = null;
let lockBoard = false;

const openCard = (card) => card.classList.add('is-open');
const closeCards = (...cards) => cards.forEach(card => card.classList.remove('is-open'));


export const openClickedCard = function () {
    const board = document.querySelector(".board");
    board.addEventListener('click', (e) => {
        const card = e.target.closest(".card");

        if (!card || lockBoard || card.classList.contains('is-open')) return;

        openCard(card);
        if (!firstCard) {
            firstCard = card;
            return;
        }

        const secondCard = card;

        if (firstCard.dataset.id === secondCard.dataset.id) {
            firstCard = null;
        } else {
            const prevCard = firstCard;
            firstCard = null;
            lockBoard = true;
            setTimeout(() => {
                closeCards(prevCard, secondCard);

                lockBoard = false;
            }, 1000);
        }
    })

}
