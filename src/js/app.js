import ApiManager from './ApiManager';
import TextTask from './tasks/TextTask';

const manager = new ApiManager('ws://localhost:7070');
// const chat = new ChatWidget(document.body, 'wss://ahj89ws.herokuapp.com');

manager.init();

// Sandbox
const coords = { latitude: 12.34, longitude: 56.78 };

const box = new TextTask(manager.tasksBoxEl, 'Test text 1');
box.init(manager.state);

const box1 = new TextTask(manager.tasksBoxEl, 'Test text 2', coords);
box1.init(manager.state);
