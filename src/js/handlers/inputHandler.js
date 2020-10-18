import TextTask from '../tasks/TextTask';
import * as fn from '../functions';

export default function inputHandler(event, manager) {
  if (event.type === 'focus') {
    return;
  }

  if (event.type === 'blur') {
    return;
  }

  if (!event.shiftKey && event.key === 'Enter') {
    const html = manager.inputEl.innerHTML;

    if (!html) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    const geoStatus = manager.state.conditions.geo;
    fn.createTask(geoStatus, manager, TextTask, html);
  }
}
