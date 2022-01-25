const notificationBarElement = document.getElementById('notification-bar');
const notificacionBarButton = document.getElementById(
  'notification-bar--close-button',
);

console.log(notificacionBarButton);

notificacionBarButton.addEventListener('click', () => {
  // handleEvent: closeNotificationBar
  closeNotificationBar();
});

function closeNotificationBar() {
  notificationBarElement.style.display = 'none';
}

// $('head').append(
//   '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">',
// );
