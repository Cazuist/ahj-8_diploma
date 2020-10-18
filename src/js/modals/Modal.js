export default class Modal {
  constructor(parent) {
    this.parent = parent;
    this.init();
  }

  init() {
    this.bindToDom();
    this.wrapper = document.querySelector('[data-type]');
    this.form = document.querySelector('form');
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
