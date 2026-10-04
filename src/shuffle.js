export function shuffleCards(cards) {
  let copy = [], n = cards.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(cards.splice(i, 1)[0]);
  }

  return copy;
}
