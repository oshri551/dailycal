importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
firebase.initializeApp({
  'messagingSenderId': '379123304454'
});
const messaging = firebase.messaging();

this.addEventListener('push', function (event) {
    console.log('Received push');
    var notificationTitle = 'Hello';
    var notificationOptions = {
      body: 'Thanks for sending this push msg.',
      icon: './images/logo-192x192.png',
      badge: './images/badge-72x72.png',
      tag: 'simple-push-demo-notification',
      data: {
        url: 'https://developers.google.com/web/fundamentals/getting-started/push-notifications/'
      }
    };
    
  if (event.data) {
    var dataText = event.data.text();
    notificationTitle = 'Received Payload';
    notificationOptions.body = 'Push data: \'' + dataText + '\'';
  }
});

