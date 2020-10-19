import TextTask from '../tasks/TextTask';
import ImageTask from '../tasks/ImageTask';
import * as fn from '../functions';

export default function inputHandler(event) {
  const { target } = event;
  const { classList } = target;

  if (classList.contains('upload_input')) {
    const file = event.target.files[0];
    const { type /* name */ } = file;

    if (!type) {
      // Обработка не поддерживаемых файлов
      return;
    }

    const src = URL.createObjectURL(file);

    if (type.includes('image')) {
      fn.createTask(this, ImageTask, src);

      if (!this.state.conditions.geo) {
        /// Обновляем состояние на сервере и клиенте сразу
        return;
      }

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => fn.updateCoords(this.taskUnderAction, coords),
        () => {
          this.modals.geoModal.show();
        },
      );
    }
  }

  if (!event.shiftKey && event.key === 'Enter') {
    event.preventDefault();
    const html = this.inputEl.textContent.trim();

    if (!html) {
      return;
    }

    fn.createTask(this, TextTask, html);

    if (!this.state.conditions.geo) {
      /// Обновляем состояние на сервере и клиенте сразу
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => fn.updateCoords(this.taskUnderAction, coords),
      () => {
        this.modals.geoModal.show();
      },
    );
  }
}
