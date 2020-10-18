export default function onLoadHandler() {
  const geo = document.querySelector('.geo_access_icon');

  if (!navigator.geolocation) {
    this.state.conditions.geo = false;
    geo.style.backgroundColor = 'red';
    geo.nextElementSibling.textContent = 'Disabled on your device';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    () => {
      geo.style.backgroundColor = 'palegreen';
      geo.nextElementSibling.textContent = 'Anable and allowed';
    },
    () => {
      geo.style.backgroundColor = 'yellow';
      geo.nextElementSibling.textContent = 'Anable and disallowed';
    },
  );
}
