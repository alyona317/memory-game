import './style.css';
import { shuffleCards } from './shuffle.js';
import cards from './data/cards.json';
import { openClickedCard } from './checkingCardId.js';


function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}
 

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
  const leadersBtn = createElement('button', 'btn btn--secondary', 'Таблица лидеров');
  leadersBtn.type = 'button';
  nav.append(newGameBtn, leadersBtn);
 
  header.append(logo, nav);
  return header;
}
 

function createCard(card) {
  const cardEl = createElement('div', 'card');
  cardEl.dataset.id = card.id;
 
 
  const back = createElement('div', 'card__back');
 
  const front = createElement('div', 'card__front');
  const img = createElement('img', 'card__image');
  img.src = card.image; 
  front.append(img);
 
  cardEl.append(back, front);
  return cardEl;
}
 

function createBoard(cardsList) {
  const board = createElement('section', 'board');
  cardsList.forEach(card => board.append(createCard(card)));
  return board;
}
 

function init() {
  const app = document.getElementById('app');
  const main = createElement('main', 'main');
  const pairs = [...cards, ...cards];
  main.append(createBoard(shuffleCards(pairs)));
  app.append(createHeader(), main);
}
 
init();
openClickedCard();