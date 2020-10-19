import * as fn from '../functions';

export default function taskHandler(event) {
  const { target, target: { classList } } = event;

  if (!target.closest('.task-block')) return;

  const task = target.closest('.task-block');
  const { id } = task.dataset;

  this.stateTask = fn.getTaskById(this.state, id);
  this.taskUnderAction = task;

  if (classList.contains('visibility_icon')) {
    classList.toggle('to-visible');
    task.querySelector('.footer_coords_box span').classList.toggle('hidden');
    return;
  }

  if (classList.contains('edit_icon')) {
    this.modals.editModal.show();
    this.modals.editModal.setValuesFromTask(this.stateTask);
    return;
  }

  if (classList.contains('del_icon')) {
    this.modals.delModal.show();
    return;
  }

  if (classList.contains('favorite_icon')) {
    classList.toggle('is-favorite');
    this.stateTask.isFavorite = !this.stateTask.isFavorite;

    // Изменение на сервере по ID
    return;
  }

  if (classList.contains('pinned_icon')) {
    if (fn.isPinnedTasckExist(this.state)
       && !classList.contains('is-pinned')) {
      return;
    }

    classList.toggle('is-pinned');
    this.stateTask.isPinned = !this.stateTask.isPinned;

    // Изменение на сервере по ID
  }
}
