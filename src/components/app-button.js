class AppButton extends HTMLElement {
  buttonAttrs = ['type'];

  type = 'button';

  constructor() {
    super();

    this.buttonAttrs.forEach(attr => {
      if (this.hasAttribute(attr)) {
        this[attr] = this.getAttribute(attr);
      }
    });

    this.attachShadow({ mode: 'open' });

    this.injectContent();
  }

  injectContent() {
    const buttonEl = document.createElement('button');

    this.buttonAttrs.forEach(attr => {
      buttonEl.setAttribute(attr, this[attr]);
    });

    buttonEl.innerHTML = this.innerHTML;

    this.shadowRoot.appendChild(buttonEl);
  }
}

window.customElements.define('app-button', AppButton);
