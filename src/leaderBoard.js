const STORAGE_KEY = 'memory-game-leaderboard';
const MAX_RESULTS = 10;
 

export function loadResults() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}
 

function compareResults(a, b) {
  return a.moves - b.moves || a.date - b.date;
}
 

export function saveResult(moves) {
  const results = loadResults();
  results.push({ moves, date: Date.now() });
 
  const top = results.sort(compareResults).slice(0, MAX_RESULTS);
 
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(top));
  } catch {
  }
}
 
export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${day}.${month}.${d.getFullYear()}`;
}