export default class Modal {
  constructor(parent, type) {
    this.parent = parent;
    this.type = type;
    this.init();
  }

  init() {
    this.bindToDom();
    this.wrapper = document.querySelector(`div[data-type="${this.type}"]`);
    this.form = document.querySelector(`form[data-type=${this.type}]`);
  }

  bindToDom() {
    document.body.insertAdjacentHTML('beforeend', this.createMarkup());
  }

  show() {
    this.wrapper.classList.remove('hidden');
  }

  hide() {
    this.wrapper.classList.add('hidden');
    this.form.reset();
  }

  setPosition(target) {
    const targetRect = target.getBoundingClientRect();
    const targetTop = targetRect.y;
    const targetLeft = targetRect.x;
    const modWidth = this.form.offsetWidth;

    this.form.style.top = `${targetTop + window.pageYOffset + 45}px`;
    this.form.style.left = `${targetLeft + window.pageXOffset - (modWidth - targetRect.width) / 2}px`;
  }
}
