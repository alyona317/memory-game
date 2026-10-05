export function shuffleCards(cards) {
  let copy = [], n = cards.length, i;

  while (n) {

    i = Math.floor(Math.random() * n--);

    copy.push(cards.splice(i, 1)[0]);
  }

  return copy;
}
