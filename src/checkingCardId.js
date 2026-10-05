import cards from './data/cards.json';
import { saveResult } from './leaderBoard.js';
 
const TOTAL_PAIRS = cards.length;
 

let firstCard = null;    
let lockBoard = false; 
let closeTimer = null;
let winTimer = null; 
let moves = 0;         
let matchedPairs = 0; 
 
const openCard = (card) => card.classList.add('is-open');
const closeCards = (...cards) => cards.forEach(card => card.classList.remove('is-open'));
 

const renderStats = function () {
  document.querySelector('.counter__moves').textContent = moves;
  document.querySelector('.counter__pairs').textContent = `${matchedPairs} из ${TOTAL_PAIRS}`;
};
 

export const resetGameState = function () {
  clearTimeout(closeTimer); 
  clearTimeout(winTimer);
  closeTimer = null;
  winTimer = null;
  firstCard = null;
  lockBoard = false;
  moves = 0;
  matchedPairs = 0;
  renderStats();
};
 
export const getStats = () => ({ moves, matchedPairs });
 

export const openClickedCard = function () {
  const main = document.querySelector('.main');
 
  main.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
 
    if (!card || lockBoard || card.classList.contains('is-open')) return;
 
    openCard(card);
 
    if (!firstCard) {
      firstCard = card;
      return;
    }
 
    const secondCard = card;
    moves++;
 
    if (firstCard.dataset.id === secondCard.dataset.id) {
      matchedPairs++;
      firstCard = null;
      renderStats();
 
      if (matchedPairs === TOTAL_PAIRS) {
        const finalMoves = moves;
        saveResult(finalMoves);
        winTimer = setTimeout(() => {
          winTimer = null;
          document.dispatchEvent(new CustomEvent('game:win', { detail: { moves: finalMoves } }));
        }, 500);
      }
    } else {
      const prevCard = firstCard;
      firstCard = null;
      lockBoard = true;
      renderStats();
      closeTimer = setTimeout(() => {
        closeCards(prevCard, secondCard);
        lockBoard = false;
        closeTimer = null;
      }, 1000);
    }
  });
};


