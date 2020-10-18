export default function onStickClickHandler(event, manager) {
  const { target, target: { classList } } = event;

  if (classList.contains('geo_icon')) {
    classList.toggle('geo_true');
    manager.state.conditions.geo = !manager.state.conditions.geo;

    if (classList.contains('geo_true')) {
      target.title = 'Switch off geolocation';
      return;
    }

    target.title = 'Switch on geolocation';
  }
}
