import ApiManager from './ApiManager';
import TextTask from './tasks/TextTask';

const manager = new ApiManager('ws://localhost:7070');

manager.init();

// Sandbox
const coords = { latitude: 12.34, longitude: 56.78 };

const box1 = new TextTask('Test text 1');
box1.init(manager.tasksBoxEl, manager.state);

const box2 = new TextTask('Test text 2');
box2.init(manager.tasksBoxEl, manager.state);
box2.updateCoords(coords);

manager.state.tasks.push(box1, box2);
