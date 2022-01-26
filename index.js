window.onload = function () {
  $('head').append(
    '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">',
  );

  const notificationBarElement = document.getElementById('notification-bar');
  const notificacionBarButton = document.getElementById(
    'notification-bar--close-button',
  );

  console.log(notificacionBarButton);

  notificacionBarButton.addEventListener('click', () => {
    closeNotificationBar();
    console.log('EVENTO CLICK');
  });

  validateClass();

  function closeNotificationBar() {
    notificationBarElement.style.display = 'none';
  }
};

window.addEventListener('popstate', function (event) {
  console.log(event.state);
  console.log(location.hash);
  validateClass();
});

function validateClass() {
  const capsula1 = document.getElementById('capsula_1');
  const capsula2 = document.getElementById('capsula_2');
  const capsula3 = document.getElementById('capsula_3');
  const text1 = document.getElementById('text_1');
  const text2 = document.getElementById('text_2');
  const text3 = document.getElementById('text_3');

  if (location.hash.includes('cart')) {
    capsula1.classList.add('active');
    text1.classList.add('active');
    capsula2.classList.remove('active');
    text2.classList.remove('active');
    capsula3.classList.remove('active');
    text3.classList.remove('active');
  }

  if (location.hash.includes('profile') || location.hash.includes('shipping')) {
    capsula2.classList.add('active');
    text2.classList.add('active');
    capsula1.classList.remove('active');
    text1.classList.remove('active');
    capsula3.classList.remove('active');
    text3.classList.remove('active');
  }

  // if (location.hash.includes('shipping')) {
  //   capsula1.classList.remove('active');
  //   text1.classList.remove('active');
  //   capsula2.classList.remove('active');
  //   text2.classList.remove('active');
  //   capsula3.classList.add('active');
  //   text3.classList.add('active');
  // }
}
