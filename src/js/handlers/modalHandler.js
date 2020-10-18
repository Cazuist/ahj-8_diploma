import TextTask from '../tasks/TextTask';
import * as fn from '../functions';

export default function modalHandler(event) {
  const { target, target: { classList } } = event;
  const { type } = target.closest('.modal-wrapper').dataset;

  if (!classList.contains('modal-btn')) {
    return;
  }

  event.preventDefault();

  if (classList.contains('cancel-btn')) {
    this.modals[type].hide();
    return;
  }

  if (type === 'geoModal') {
    const coords = this.modals[type].getCoordinates();
    const html = this.inputEl.innerHTML;

    if (fn.isValidCoords(coords)) {
      fn.makeTaskActions(this, TextTask, html, coords);
      this.modals[type].hide();
      return;
    }

    const message = 'Вы ввели неправильные координаты!';
    this.modals[type].showError(message);
  }
}
