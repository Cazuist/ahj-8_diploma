export function makeTaskActions(manager, Task, content, coords = null) {
  manager.inputEl.blur();
  const box = new Task(manager.tasksBoxEl, content, coords);
  box.init(manager.state);
  manager.tasksBoxEl.scrollTop = manager.tasksBoxEl.scrollHeight;

  manager.inputEl.textContent = '';
}

export function createTask(geoStatus, manager, Task, content) {
  if (!geoStatus) {
    makeTaskActions(manager, Task, content);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => makeTaskActions(manager, Task, content, coords),
    () => {
      manager.modals.geoModal.show();
    },
  );
}

export function isValidCoords(coords) {
  if (!isNaN(coords.latitude) && !isNaN(coords.longitude)) {
    return true;
  }

  return false;
}
