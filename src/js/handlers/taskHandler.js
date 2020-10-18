export default function taskHandler(event) {
  const { target, target: { classList } } = event;
  const { type } = target.closest('.modal-wrapper').dataset;

  console.log(target, classList, type);
}
