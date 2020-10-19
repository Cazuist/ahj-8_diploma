import Task from './Task';

export default class TextTask extends Task {
  constructor(container, content, coords = null) {
    super(container, content, coords);
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkup() {
    return `
      <div class="task-block text-block" data-id="${this.id}" data-task-type="text">
        <div class="task_block_header">
          <div class="header_status_box">
            <span class="icon header_status pinned_icon"></span>
            <span class="icon header_status favorite_icon"></span>
          </div>

          <div class="header_controls_box">
            <span class="icon visibility_icon to-visible"></span>
            <span class="icon header_controls edit_icon"></span>
            <span class="icon header_controls del_icon"></span>              
          </div>
        </div>

        <div class="task_block_main">
          <div class="text-content">${this.content}</div>         
        </div>
        
        <div class="task_block_footer">
          <div class="footer_coords_box">
            <span>[${this.getCoords(this.coords)}]</span>
          </div>

          <div class="footer_time_box">
            ${this.getDate()}
          </div>
        </div>
      </div>
    `;
  }
}
