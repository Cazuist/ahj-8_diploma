import Modal from './Modal';

export default class RegisterModal extends Modal {
  // eslint-disable-next-line  no-useless-constructor
  constructor(parent) {
    super(parent);
  }

  init() {
    super.init();
    this.form = document.querySelector('.reg-form-modal');
  }

  bindToDom() {
    document.body.insertAdjacentHTML('beforeend', this.createMarkup());
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkup() {
    return `
      <form class="modal reg-form-modal hidden" data-type="msgModal" novalidate>
        <div class="form-title">Выберите псевдоним</div>
        <input class="register-modal-input" type='text'>
        <button class="modal-btn reg-btn">Продолжить</button>    
      </form>
    `;
  }
}
