import { createElement } from './board.js';
import { openModal, closeModal } from './modal.js';
import { loadResults, formatDate } from './leaderBoard.js';

function createTable(results) {
    const table = createElement('table', 'leaders__table');

    const headRow = createElement('tr');
    ['Место', 'Ходы', 'Дата'].forEach(title => headRow.append(createElement('th', '', title)));
    const thead = createElement('thead');
    thead.append(headRow);

    const tbody = createElement('tbody');
    results.forEach((result, index) => {
        const row = createElement('tr');
        row.append(
            createElement('td', '', String(index + 1)),
            createElement('td', '', String(result.moves)),
            createElement('td', '', formatDate(result.date))
        );
        tbody.append(row);
    });

    table.append(thead, tbody);
    return table;
}


export function showLeaderboardModal() {
    const results = loadResults();

    const box = createElement('div', 'leaders');
    box.append(createElement('h2', 'leaders__title', 'Таблица лидеров'));

    if (results.length === 0) {
        box.append(createElement('p', 'leaders__empty', 'Пока нет результатов'));
    } else {
        box.append(createTable(results));
    }

    const closeBtn = createElement('button', 'btn btn--secondary', 'Закрыть');
    closeBtn.type = 'button';
    closeBtn.addEventListener('click', closeModal);

    const actions = createElement('div', 'leaders__actions');
    actions.append(closeBtn);
    box.append(actions);

    openModal(box);
}