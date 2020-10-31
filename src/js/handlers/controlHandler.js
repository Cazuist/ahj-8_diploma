export default function controlHandler(event) {
  const { target, target: { classList } } = event;

  if (classList.contains('control_task_header_icon')) {
    classList.toggle('down');
    target.closest('.control_task_header').nextElementSibling.classList.toggle('hidden');
  }
}
