export default function onLoadHandler() {
  const geo = document.querySelector('.geo_access_icon');

  if (!navigator.geolocation) {
    this.geoAllowedStatus = false;
    geo.nextElementSibling.textContent = 'Unsupported geolocotion';
    document.querySelector('.geo_send_icon').classList.add('blocked');
    return;
  }

  geo.classList.remove('disabled_geo');

  navigator.geolocation.getCurrentPosition(
    () => {
      geo.classList.add('switch-on');
      geo.nextElementSibling.textContent = 'Switched on';
    },
    () => {
      geo.classList.add('switch-off');
      geo.nextElementSibling.textContent = 'Switched off';
    },
  );
}
