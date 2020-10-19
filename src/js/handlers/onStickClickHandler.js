export default function onStickClickHandler(event) {
  const { /* target, */ target: { classList } } = event;

  if (classList.contains('geo_icon')) {
    classList.toggle('geo_true');
    this.state.conditions.geo = !this.state.conditions.geo;
    return;
  }

  if (classList.contains('upload_icon')) {
    this.uploadEl.dispatchEvent(new MouseEvent('click'));
  }
}
