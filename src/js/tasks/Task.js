import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default class TextTask {
  constructor(container, content, coords = null) {
    this.container = container;
    this.content = content;
    this.coords = coords;
    this.type = 'text';
    this.isPinned = false;
    this.isFavorite = false;

    this.id = uuidv4();
    this.timestamp = moment().valueOf();
  }

  init(state) {
    this.addToState(state);
    this.bindToDOM();
  }

  bindToDOM() {
    this.container.insertAdjacentHTML('beforeend', this.createMarkup());
  }

  getCoords(coords) {
    if (!coords) {
      return '--.----, --.----';
    }

    return `${this.coords.latitude.toFixed(4)}, ${this.coords.longitude.toFixed(4)}`;
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
