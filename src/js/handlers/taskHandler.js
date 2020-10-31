import {
  getTaskById,
  updateStates,
} from '../functions/functions';

export default function taskHandler(event) {
  const { target, target: { classList } } = event;
  let id;
  let stateTask;

  if (!target.closest('.task')) return;

  if (target.closest('.task-block')) {
    this.taskUnderAction = target.closest('.task-block');
    id = this.taskUnderAction.dataset.id;
    stateTask = getTaskById(this.state, id);
  }

  if (classList.contains('visibility_icon')) {
    classList.toggle('to-visible');
    this.taskUnderAction.querySelector('.footer_coords_box span').classList.toggle('hidden');
    this.taskUnderAction = null;
    return;
  }

  if (classList.contains('favorite_icon')) {
    this.taskUnderAction.classList.toggle('is-favorite');
    stateTask.switchFavorite();
    updateStates(this, 'switchFavorite', { id });
    this.taskUnderAction = null;
    return;
  }

  if (classList.contains('del_icon')) {
    this.modals.delModal.show();
    return;
  }

  if (classList.contains('edit_icon')) {
    this.modals.editModal.show();
    this.modals.editModal.setValuesFromTask(stateTask);
    return;
  }

  if (classList.contains('download_icon')) {
    const link = this.taskUnderAction.querySelector('a');
    link.click();
    return;
  }

  if (classList.contains('pinned_icon')) {
    if (this.state.conditions.pinnedTask) {
      return;
    }

    stateTask.switchPinned();
    this.showPinnedMessage(id);
    updateStates(this, 'switchPinnedOn', { id });
    return;
  }

  if (classList.contains('pinned_close_icon')) {
    const pinnedTaskId = this.state.conditions.pinnedTask;
    const pinnedTask = getTaskById(this.state, pinnedTaskId);
    pinnedTask.switchPinned();

    this.hidePinnedMessage();
    updateStates(this, 'switchPinnedOff');
    return;
  }

  if (classList.contains('pinned_preview_box')) {
    // console.log('Show me task info!');
    // console.log(this.state.conditions.pinnedTask);

  }
}
