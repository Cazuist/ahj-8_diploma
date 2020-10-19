import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default class Task {
  constructor(content) {
    this.content = content;
    this.coords = null;
    this.isPinned = false;
    this.isFavorite = false;

    this.id = uuidv4();
    this.timestamp = moment().valueOf();
  }

  init(container) {
    this.bindToDOM(container);
  }

  bindToDOM(container) {
    container.insertAdjacentHTML('beforeend', this.createMarkup());
  }

  setCoords(coords) {
    this.coords = coords;
  }

  getCoordsString() {
    return `${this.coords.latitude.toFixed(4)}, ${this.coords.longitude.toFixed(4)}`;
  }

  updateCoords(coords) {
    if (!coords) return;

    this.setCoords(coords);
    const task = document.querySelector(`[data-id="${this.id}"]`);
    const coordsEl = task.querySelector('.coords_field');
    coordsEl.textContent = `[${this.getCoordsString()}]`;
  }

  getDate() {
    const now = moment(this.timestamp);
    moment.locale('ru');
    return now.format('HH:mm');
  }

  addToState(state) {
    state.tasks.push(this);
  }

  switchPinned() {
    this.isPinned = !this.isPinned;
  }

  switchFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
