export function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}
 
function createCard(card) {
  const cardEl = createElement('div', 'card');
  cardEl.dataset.id = card.id;
 
  const back = createElement('div', 'card__back');
 
  const front = createElement('div', 'card__front');
  const img = createElement('img', 'card__image');
  img.src = card.image;
  img.alt = card.name;
  front.append(img);
 
  cardEl.append(back, front);
  return cardEl;
}
 
export function createBoard(cardsList) {
  const board = createElement('section', 'board');
  cardsList.forEach(card => board.append(createCard(card)));
  return board;
}
 


