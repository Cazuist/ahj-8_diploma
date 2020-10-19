import Modal from './Modal';

export default class EditModal extends Modal {
  // eslint-disable-next-line  no-useless-constructor
  constructor(parent, type = 'dragModal') {
    super(parent, type);
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkup() {
    return `
      <div class="modal modal-wrapper hidden"  data-type="dragModal">
        <form class="form-modal drag-form-modal" data-type="dragModal" novalidate>
          <div class="form-title">Загрузка файла</div>

          <div class="upload_box">
            <input class="uppload_field" type="file">
            <div class="dragable_box">Drag File Here</div>
          </div>
          
          <div class="modal-row modal-btn-row">            
            <button class="modal-btn ok-btn">Apply</button>
            <button class="modal-btn cancel-btn">Cancel</button>
          </div>      
        </form>
      </div>
    `;
  }
}
