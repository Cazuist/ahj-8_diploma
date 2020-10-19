import Task from './Task';
import { scrollBoxUp } from '../functions';

export default class ImageTask extends Task {
  constructor(src) {
    super(src);
    this.src = src;
    this.type = 'image';
  }

  init(state) {
    super.init(state);
    this.onLoad();
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkup() {
    return `
      <div class="task-block image-block" data-id="${this.id}" data-task-type="image">
        <div class="task_block_header">
          <div class="header_status_box">
            <span class="icon header_status pinned_icon"></span>
            <span class="icon header_status favorite_icon"></span>
          </div>

          <div class="header_controls_box">
            <span class="icon visibility_icon to-visible"></span>
            <span class="icon header_controls download_icon"></span>  
            <span class="icon header_controls del_icon"></span>              
          </div>
        </div>

        <div class="task_block_main">
          <img class="task_img" src="${this.src}">
          <a href="${this.src}" class="dowunload_link hidden" download></a>         
        </div>
        
        <div class="task_block_footer">
          <div class="footer_coords_box">
            <span class="coords_field">[--.----, ---.----]</span>
          </div>

          <div class="footer_time_box">
            ${this.getDate()}
          </div>
        </div>
      </div>
    `;
  }

  onLoad() {
    const imgEl = document.querySelector(`[src="${this.src}"]`);
    imgEl.onload = () => this.scroll();
  }

  // eslint-disable-next-line class-methods-use-this
  scroll() {
    scrollBoxUp(document.querySelector('.main-container_content'));
  }
}
