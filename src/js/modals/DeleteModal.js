import Modal from './Modal';

export default class DeleteModal extends Modal {
  // eslint-disable-next-line  no-useless-constructor
  constructor(parent, type = 'delModal') {
    super(parent, type);
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkup() {
    return `
      <div class="modal modal-wrapper hidden"  data-type="delModal">
        <form class="form-modal del-form-modal" data-type="delModal" novalidate>
          <div class="form-title">Удаление контента</div>

          <p class="message-content">
            Вы действительно хотите удалить данный блок?
            Это действие необратимо!
          </p>
          
          <div class="modal-btn-row modal-row">
            <button class="modal-btn ok-btn">Apply</button>
            <button class="modal-btn cancel-btn">Cancel</button>            
          </div>    
        </form>
      </div>
    `;
  }
}
