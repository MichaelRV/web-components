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

    this.injectStyles();
    this.injectContent();
  }

  injectStyles() {
    const styleEl = document.createElement('style');

    styleEl.innerHTML = `
      button {
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
        line-height: 1.2;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: none;
        padding: 10px 15px;
      }
    `;

    this.shadowRoot.appendChild(styleEl);
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
