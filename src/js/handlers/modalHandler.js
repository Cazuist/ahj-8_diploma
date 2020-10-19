import TextTask from '../tasks/TextTask';
import * as fn from '../functions';

export default function modalHandler(event) {
  const { target, target: { classList } } = event;
  const { type } = target.closest('.modal-wrapper').dataset;
  const modal = this.modals[type];

  if (!classList.contains('modal-btn')) {
    return;
  }

  event.preventDefault();

  if (classList.contains('cancel-btn')) {
    modal.hide();
    return;
  }

  if (type === 'geoModal') {
    const coords = modal.getCoordinates();
    const html = this.inputEl.innerHTML;

    if (fn.isValidCoords(coords)) {
      fn.makeTaskActions(this, TextTask, html, coords);
      modal.hide();
      return;
    }

    const message = 'Вы ввели неправильные координаты!';
    modal.showError(message);
    return;
  }

  if (type === 'delModal') {
    const { id } = this.taskUnderAction.dataset;
    this.taskUnderAction.remove();
    this.taskUnderAction = null;
    modal.hide();

    fn.delTaskFromState(this.state, id);

    // Запрос на сервер по ID
    return;
  }

  if (type === 'editModal') {
    modal.setValuesToDOM(this.taskUnderAction);
    modal.setValuesToTask(this.stateTask);
    modal.hide();
    this.taskUnderAction = null;
    this.stateTask = null;

    // Запрос на сервер по ID
  }
}
