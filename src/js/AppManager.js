import GeoAddModal from './modals/GeoAddModal';
import DeleteModal from './modals/DeleteModal';
import EditModal from './modals/EditModal';
import eventHandlers from './handlers/eventHandlers';
import { getTaskById, getPinnedType } from './functions/functions';

export default class AppManager {
  constructor(url) {
    this.url = url;
    this.container = document.querySelector('.workspace_wrapper');

    this.state = {
      tasks: [],
      conditions: { geo: true, pinnedTask: null, lastChange: null },
    };

    this.connectionStatus = false;
    this.geoAllowedStatus = true;
    this.creatingTask = null;
    this.taskUnderAction = null;
  }

  init() {
    this.initModals();
    this.initElements();
    this.initWSConnection();
    this.initHandlers();
    this.registerEvents();
  }

  initElements() {
    this.inputEl = document.querySelector('.input_panel');
    this.footerSticks = document.querySelectorAll('footer .icon');
    this.tasksBoxEl = document.querySelector('.main-container_content');
    this.forms = document.querySelectorAll('.form-modal');
    this.uploadEl = document.querySelector('.upload_input');
    this.dragableEl = document.querySelector('.draggable_area');
    this.controlPanel = document.querySelector('.media_status_aside');
  }

  initModals() {
    this.modals = {
      geoModal: new GeoAddModal(),
      delModal: new DeleteModal(),
      editModal: new EditModal(),
    };
  }

  initWSConnection() {
    this.ws = new WebSocket(this.url);
    this.ws.binaryType = 'blob';
    this.registerSocketEvents();
  }

  initHandlers() {
    this.handlers = {
      wsHandler: new eventHandlers.WSEventsHandler(this),
    };
  }

  registerEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      eventHandlers.onLoadHandler.call(this);
    });

    document.addEventListener('dragover', (event) => {
      eventHandlers.dragAndDropHandler.call(this, event);
    });

    document.addEventListener('dragleave', (event) => {
      eventHandlers.dragAndDropHandler.call(this, event);
    });

    this.dragableEl.addEventListener('drop', (event) => {
      eventHandlers.dragAndDropHandler.call(this, event);
    });

    this.inputEl.addEventListener('keydown', (event) => {
      eventHandlers.inputHandler.call(this, event);
    });

    this.inputEl.addEventListener('input', (event) => {
      eventHandlers.inputHandler.call(this, event);
    });

    this.uploadEl.addEventListener('change', (event) => {
      eventHandlers.inputHandler.call(this, event);
    });

    this.footerSticks.forEach((stick) => {
      stick.addEventListener('click', (event) => {
        eventHandlers.onStickClickHandler.call(this, event);
      });
    });

    this.forms.forEach((form) => {
      form.addEventListener('click', (event) => {
        eventHandlers.modalHandler.call(this, event);
      });
    });

    this.tasksBoxEl.addEventListener('click', (event) => {
      eventHandlers.taskHandler.call(this, event);
    });

    this.tasksBoxEl.addEventListener('scroll', () => {
      eventHandlers.scrollHandler.call(this);
    });

    this.controlPanel.addEventListener('click', (event) => {
      eventHandlers.controlHandler.call(this, event);
    });

    // window.addEventListener('beforeunload', () => this.onUnload());
  }

  registerSocketEvents() {
    this.ws.addEventListener('open', () => {
      this.handlers.wsHandler.onWSOpen(this);
    });

    this.ws.addEventListener('close', () => {
      this.handlers.wsHandler.onWSClose(this);
    });

    this.ws.addEventListener('message', (event) => {
      this.handlers.wsHandler.onWSMessage(this, event);
    });
  }

  getModal(modalName) {
    return this.modals[modalName];
  }

  hidePinnedMessage() {
    const pinnedMessage = document.querySelector('.pinned_message');
    const pinnedElement = document.querySelector('.is-pinned');

    pinnedMessage.classList.add('hidden');
    pinnedElement.classList.remove('hidden', 'is-pinned');
    pinnedElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
    this.state.conditions.pinnedTask = null;
  }

  showPinnedMessage(id) {
    const pinnedMessage = document.querySelector('.pinned_message');
    const pinnedTask = getTaskById(this.state, id);

    pinnedMessage.classList.remove('hidden');
    pinnedMessage.style.top = `${this.tasksBoxEl.scrollTop}px`;
    this.taskUnderAction.classList.add('is-pinned', 'hidden');

    pinnedMessage.querySelector('.pinned_info_box_type')
      .textContent = getPinnedType(pinnedTask);

    this.state.conditions.pinnedTask = id;
    this.taskUnderAction = null;
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('chaos'));
  }
}
