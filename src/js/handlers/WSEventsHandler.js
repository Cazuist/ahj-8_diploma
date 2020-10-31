import {
  updateStates,
  createTextTask,
  scrollBoxUp,
  getPinnedType,
  getTaskById,
} from '../functions/functions';
import { updFileMngr } from '../functions/fileManagerFunctions';
import taskTypes from '../tasks/tasksTypes';

export default class WSEventsHandler {
  constructor() {
    this.intervalId = null;
  }

  onWSOpen(manager) {
    this.clearInterval();
    manager.connectionStatus = true;

    document.querySelector('.connection_icon').classList.remove('offline');
    document.querySelector('.connection_icon~* ').textContent = 'Online';

    const { lastChange } = manager.state.conditions;
    updateStates(manager, 'getState', { lastChange });
  }

  onWSClose(manager) {
    manager.connectionStatus = false;
    manager.ws = null;

    document.querySelector('.connection_icon').classList.add('offline');
    document.querySelector('.connection_icon~* ').textContent = 'Offline';
    // this.restoreConnection();
  }

  onWSMessage(manager, event) {
    const { method, data, types } = JSON.parse(event.data);
    if (method === 'getState') {
      manager.state.conditions = data.conditions;

      if (!data.conditions.geo) {
        document.querySelector('.geo_icon').classList.remove('geo_true');
      }

      data.tasks.forEach((task) => {
        const { type } = task;
        createTextTask(manager, taskTypes[type], task);
        scrollBoxUp(manager.tasksBoxEl);
      });

      if (data.conditions.pinnedTask) {
        const pinnedMessage = document.querySelector('.pinned_message');
        pinnedMessage.classList.remove('hidden');

        document.querySelector('.pinned_info_box_type')
          .textContent = getPinnedType(getTaskById(manager.state, data.conditions.pinnedTask));
      }

      updFileMngr(types, document.querySelector('.file_manager'));
      // localStorage.setItem('chaos', JSON.stringify(this.state));
      return;
    }

    if (method === 'scrollTasks') {
      manager.state.tasks.unshift(...data);

      data.reverse().forEach((task) => {
        const { type } = task;
        const newTask = new taskTypes[type](task);
        const html = newTask.createMarkup();
        manager.tasksBoxEl.insertAdjacentHTML('afterbegin', html);
      });

      manager.tasksBoxEl.scrollTop = 20;
    }
  }

  restoreConnection() {
    this.intervalId = setInterval(() => {
      this.manager.initWSConnection();
    }, 60000);
  }

  clearInterval() {
    clearInterval(this.intervalId);
  }
}
