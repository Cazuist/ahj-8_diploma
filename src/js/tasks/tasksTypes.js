import TextTask from './TextTask';
import ImageTask from './ImageTask';
import AudioTask from './AudioTask';
import VideoTask from './VideoTask';
import FileTask from './FileTask';
import CoordsTask from './CoordsTask';

export const tasksTypes = {
  message: TextTask,
  coords: CoordsTask,
  image: ImageTask,
  video: VideoTask,
  audio: AudioTask,
  application: FileTask,
  file: FileTask,
};

export default tasksTypes;
