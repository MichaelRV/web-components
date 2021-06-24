class AppInput extends HTMLElement {
  elAttrs = ['label'];
  inputAttrs = ['type', 'name', 'placeholder', 'value'];

  type = 'text';
  name = null;
  placeholder = null;
  value = null;

  constructor() {
    super();

    this.inputAttrs.forEach(attr => {
      if (this.hasAttribute(attr)) {
        this[attr] = this.getAttribute(attr);
      }
    });

    if (this.type === 'number' && !this.value) {
      this.value = null;
    }

    this.attachShadow({ mode: 'open' });

    this.injectContent();
  }

  injectContent() {
    this.elAttrs.forEach(attr => {
      if (this.hasAttribute(attr)) {
        switch (attr) {
          case 'label':
            const labelEl = document.createElement('label');

            labelEl.innerText = this.getAttribute('label');

            this.shadowRoot.appendChild(labelEl);

            break;
        }
      }
    });

    const input = document.createElement('input');

    this.inputAttrs.forEach(attr => {
      input.setAttribute(attr, this[attr]);
    });

    input.addEventListener('change', e => {
      this.value = (this.type === 'number' ? +e.target.value : e.target.value);
    });

    this.shadowRoot.appendChild(input);
  }
}

window.customElements.define('app-input', AppInput);
