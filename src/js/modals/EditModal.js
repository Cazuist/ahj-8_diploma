import Modal from './Modal';

export default class EditModal extends Modal {
  // eslint-disable-next-line  no-useless-constructor
  constructor(parent, type = 'editModal') {
    super(parent, type);
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkup() {
    return `
      <div class="modal modal-wrapper hidden"  data-type="editModal">
        <form class="form-modal edit-form-modal" data-type="editModal" novalidate>
          <div class="form-title">Редактирование контента</div>
          <p class="message-content">
            Отредактируйте данную тему
          </p>

          <textarea class="edit-modal-text"></textarea>
          
          <p class="message-content">
            Координаты:
          </p>

          <div class="modal-coords-row modal-row">
            <label>X:  <input type="text" class="lat_input" name="latitude_field" disabled></label>
            <label>Y:  <input type="text" class="long_input" name="longitude_field" disabled></label>
          </div>   
          
          <div class="modal-row modal-btn-row">            
            <button class="modal-btn ok-btn">Apply</button>
            <button class="modal-btn cancel-btn">Cancel</button>
          </div>      
        </form>
      </div>
    `;
  }

  setValuesFromTask({ content, coords }) {
    this.form.querySelector('textarea').value = content;

    if (!coords) return;

    this.form.querySelector('.lat_input').value = coords.latitude;
    this.form.querySelector('.long_input').value = coords.longitude;
  }

  setValuesToTask(task) {
    task.content = this.form.querySelector('textarea').value;
  }

  setValuesToDOM(task) {
    const valueFromForm = this.form.querySelector('textarea').value;
    const contentBox = task.querySelector('.text-content');

    contentBox.textContent = valueFromForm;
  }
}
