export function scrollBoxUp(box) {
  box.scrollTop = box.scrollHeight;
}

export function createTask(manager, Task, content) {
  const box = new Task(content);
  box.init(manager.tasksBoxEl);
  manager.taskUnderAction = box;

  if (box.type.includes('text')) {
    manager.inputEl.blur();
    manager.inputEl.textContent = '';
    scrollBoxUp(manager.tasksBoxEl);
    return;
  }

  if (box.type.includes('image')) {
    manager.uploadEl.value = '';
  }
}

export function updateCoords(task, coords) {
  // const { id } = task;
  task.updateCoords(coords);
  task = null;

  // Запрос на сервер на изменение task по ID
}

export function isValidCoords(coords) {
  if (!isNaN(coords.latitude) && !isNaN(coords.longitude)) {
    return true;
  }

  return false;
}

export function delTaskFromState(state, taskId) {
  state.tasks = state.tasks.filter(({ id }) => id !== taskId);
}

export function getTaskById(state, taskId) {
  return state.tasks.find(({ id }) => id === taskId);
}

export function isPinnedTasckExist(state) {
  return state.tasks.some(({ isPinned }) => isPinned);
}
