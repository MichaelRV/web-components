import './components/app-button';
import './components/app-input';

const inputEl = document.querySelector('#input');
const buttonEl = document.querySelector('#button');
const resultEl = document.querySelector('#result');

if (inputEl && buttonEl && resultEl) {
  buttonEl.addEventListener('click', () => {
    resultEl.innerHTML = (+inputEl.value * 2);
  });
}
