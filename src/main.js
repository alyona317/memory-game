import './style.css';
import { shuffleCards } from './shuffle.js';
import cards from './data/cards.json';
import { createElement, createBoard } from './board.js';
import { openClickedCard } from './checkingCardId.js';
import { newGame } from './newGame.js';
 
function createHeader() {
  const header = createElement('header', 'header');
 
  const logo = createElement('div', 'logo');
  logo.append(
    createElement('span', 'logo__title', 'Memory Game'),
    createElement('span', 'logo__subtitle', 'Paper Company · Regional Branch')
  );
 
  const nav = createElement('nav', 'header__nav');
  const newGameBtn = createElement('button', 'btn btn--primary', 'Новая игра');
  newGameBtn.type = 'button';
  newGameBtn.addEventListener('click', () => newGame(cards));
 
  const leadersBtn = createElement('button', 'btn btn--secondary', 'Таблица лидеров');
  leadersBtn.type = 'button';
  nav.append(newGameBtn, leadersBtn);
 
  header.append(logo, nav);
  return header;
}
 
function init() {
  const app = document.getElementById('app');
  const main = createElement('main', 'main');
  main.append(createBoard(shuffleCards([...cards, ...cards])));
  app.append(createHeader(), main);
}
 
init();
openClickedCard();
