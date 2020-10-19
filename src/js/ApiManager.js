import GeoAddModal from './modals/GeoAddModal';
import DeleteModal from './modals/DeleteModal';
import EditModal from './modals/EditModal';
import DragDropModal from './modals/DragDropModal';

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

    this.taskUnderAction = null;
    this.stateTask = null;
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
    this.uploadEl = document.querySelector('.upload_input');
  }

  initModals() {
    this.modals = {
      geoModal: new GeoAddModal(document.body),
      delModal: new DeleteModal(document.body),
      editModal: new EditModal(document.body),
      dragModal: new DragDropModal(document.body),
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
    this.uploadEl.addEventListener('change', (event) => this.onInputEvents(event));
  }

  onDOMLoaded() {
    eventHandlers.onLoadHandler.call(this);
  }

  onInputEvents(event) {
    eventHandlers.inputHandler.call(this, event);
  }

  onStickClick(event) {
    eventHandlers.onStickClickHandler.call(this, event);
  }

  onModalClick(event) {
    eventHandlers.modalHandler.call(this, event);
  }

  onTaskClick(event) {
    eventHandlers.taskHandler.call(this, event);
  }
}
