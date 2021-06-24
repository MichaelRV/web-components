class AppInput extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'type', 'name', 'placeholder', 'value'];
  }

  labelEl = null;
  inputEl = null;

  type = 'text';
  name = null;
  placeholder = null;
  value = null;

  constructor() {
    super();

    if (this.hasAttribute('type')) {
      this.type = this.getAttribute('type');
    }
    if (this.hasAttribute('name')) {
      this.name = this.getAttribute('name');
    }
    if (this.hasAttribute('placeholder')) {
      this.placeholder = this.getAttribute('placeholder');
    }
    if (this.hasAttribute('value')) {
      this.value = this.getAttribute('value');
    }

    this.attachShadow({ mode: 'open' });

    this.injectStyles();
    this.injectContent();
  }

  injectStyles() {
    const styleEl = document.createElement('style');

    styleEl.innerHTML = `
      input {
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
    if (this.hasAttribute('label')) {
      this.labelEl = document.createElement('label');

      this.labelEl.innerHTML = this.getAttribute('label');

      this.shadowRoot.appendChild(this.labelEl);
    }

    this.inputEl = document.createElement('input');

    this.inputEl.setAttribute('type', this.type);
    this.inputEl.setAttribute('name', this.name);
    this.inputEl.setAttribute('placeholder', this.placeholder);
    this.inputEl.setAttribute('value', this.value);

    this.shadowRoot.appendChild(this.inputEl);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'label':
        if (this.labelEl) {
          this.labelEl.innerHTML = newValue;
        } else {
          this.labelEl = document.createElement('label');

          this.labelEl.innerHTML = newValue;
        }

        break;
      case 'type':
      case 'name':
      case 'placeholder':
      case 'value':
        this[name] = newValue;
        this.inputEl[name] = newValue;

        break;
      default:
        break;
    }
  }

  connectedCallback() {
    if (this.inputEl.isConnected) {
      this.inputEl.addEventListener('input', e => {
        this.value = e.target.value;
      });
    }
  }
}

window.customElements.define('app-input', AppInput);
