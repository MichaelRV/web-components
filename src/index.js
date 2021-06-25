import './components/app-button';
import './components/app-input';

const inputEl = document.querySelector('#input');
const buttonEl = document.querySelector('#button');
const resultEl = document.querySelector('#result');

if (inputEl && buttonEl && resultEl) {
  buttonEl.addEventListener('click', () => {
    if (!Number.isSafeInteger(+inputEl.value)) {
      alert('This number is too big');

      return;
    }

    resultEl.innerHTML = (+inputEl.value * 2);
  });
}
