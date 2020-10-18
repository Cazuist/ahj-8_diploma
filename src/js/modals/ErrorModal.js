import Modal from './Modal';

export default class ErrorModal extends Modal {
  // eslint-disable-next-line  no-useless-constructor
  constructor(parent) {
    super(parent);
  }

  init() {
    super.init();
    this.form = document.querySelector('.err-form-modal');
  }

  bindToDom() {
    document.body.insertAdjacentHTML('beforeend', this.createMarkup());
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkup() {
    return `
      <form class="modal err-form-modal hidden" data-type="errModal" novalidate>
        <div class="form-title">Внимание!</div>

        <p class="message-content">
          Такой псевдоним уже существует
        </p>

        <p class="message-content">
          Выберите другой псевдоним
        </p>

        <button class="modal-btn err-btn">Ok</button>    
      </form>
    `;
  }
}
