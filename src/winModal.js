import { createElement } from './board.js';
import { openModal, closeModal } from './modal.js';


function pluralMoves(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return 'ход';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'хода';
  return 'ходов';
}
 
export function showWinModal(moves, onNewGame) {
  const box = createElement('div', 'win');
 
  const title = createElement('h2', 'win__title', 'Победа!');
  const text = createElement('p', 'win__text', 'Вы нашли все пары за');
  const result = createElement('p', 'win__moves', `${moves} ${pluralMoves(moves)}`);
 
  const actions = createElement('div', 'win__actions');
 
  const newGameBtn = createElement('button', 'btn btn--primary', 'Новая игра');
  newGameBtn.type = 'button';
  newGameBtn.addEventListener('click', () => {
    closeModal();
    onNewGame();
  });
 
  const closeBtn = createElement('button', 'btn btn--secondary', 'Закрыть');
  closeBtn.type = 'button';
  closeBtn.addEventListener('click', closeModal);
 
  actions.append(newGameBtn, closeBtn);
  box.append(title, text, result, actions);
 
  openModal(box);
}
 


