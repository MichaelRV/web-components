class AppButton extends HTMLElement {
  static get observedAttributes() {
    return ['type'];
  }

  buttonEl = null;

  type = 'button';

  constructor() {
    super();

    if (this.hasAttribute('type')) {
      this.type = this.getAttribute('type');
    }

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
    this.buttonEl = document.createElement('button');

    this.buttonEl.type = this.type;
    this.buttonEl.innerHTML = this.innerHTML;

    this.shadowRoot.appendChild(this.buttonEl);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'type':
        this[name] = newValue;
        this.buttonEl[name] = newValue;

        break;
      default:
        break;
    }
  }
}

window.customElements.define('app-button', AppButton);
