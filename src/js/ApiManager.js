import GeoAddModal from './modals/GeoAddModal';
import eventHandlers from './handlers/eventHandlers';

export default class ApiManager {
  constructor(url) {
    this.url = url;
    this.container = document.querySelector('.workspace_wrapper');
    this.geoAllowedStatus = true;

    this.state = {
      tasks: [],
      conditions: { geo: true, pinnedTask: null },
    };
  }

  init() {
    this.initModals();
    this.initElements();
    this.registerEvents();
  }

  initElements() {
    this.inputEl = document.querySelector('.input_panel');
    this.footerSticks = document.querySelectorAll('footer .icon');
    this.tasksBoxEl = document.querySelector('.main-container_content');
    this.forms = document.querySelectorAll('.form-modal');
  }

  initModals() {
    this.modals = {
      geoModal: new GeoAddModal(document.body),
    };
  }

  registerEvents() {
    document.addEventListener('DOMContentLoaded', () => this.onDOMLoaded());
    this.inputEl.addEventListener('keydown', (event) => this.onInputEvents(event));
    this.inputEl.addEventListener('focus', (event) => this.onInputEvents(event));
    this.inputEl.addEventListener('blur', (event) => this.onInputEvents(event));

    this.footerSticks.forEach((stick) => {
      stick.addEventListener('click', (event) => this.onStickClick(event));
    });

    this.forms.forEach((form) => {
      form.addEventListener('click', (event) => this.onModalClick(event));
    });

    this.tasksBoxEl.addEventListener('click', (event) => this.onTaskClick(event));
  }

  onDOMLoaded() {
    eventHandlers.onLoadHandler.call(this);
  }

  onInputEvents(event) {
    eventHandlers.inputHandler(event, this);
  }

  onStickClick(event) {
    eventHandlers.onStickClickHandler(event, this);
  }

  onModalClick(event) {
    eventHandlers.modalHandler.call(this, event);
  }

  onTaskClick(event) {
    eventHandlers.taskHandler.call(this, event);
  }
}
