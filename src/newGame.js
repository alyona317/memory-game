import { shuffleCards } from "./shuffle";
import { createBoard } from './board.js';
import { resetGameState } from './checkingCardId.js';
 
export const newGame = function (cardsList) {
  resetGameState();
  const newBoard = createBoard(shuffleCards([...cardsList, ...cardsList]));
  document.querySelector('.board').replaceWith(newBoard);
};