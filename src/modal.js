import { createElement } from './board.js';
 
let dialog = null;
let content = null;
 
function cleanup() {
  document.body.classList.remove('no-scroll');
  content.replaceChildren();
}
 
function getDialog() {
  if (dialog) return dialog;
 
  dialog = createElement('dialog', 'modal');
  content = createElement('div', 'modal__content');
  dialog.append(content);
 

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) closeModal();
  });
 

  dialog.addEventListener('close', () => {
    if (!dialog.open) cleanup();
  });
 
  document.body.append(dialog);
  return dialog;
}

export function openModal(modalContent) {
  const d = getDialog();
  content.replaceChildren(modalContent);
  document.body.classList.add('no-scroll');
  d.showModal();
}
 
export function closeModal() {
  if (!dialog?.open) return;
  dialog.close();
  cleanup();
}
 


