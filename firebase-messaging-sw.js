importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
firebase.initializeApp({
  'messagingSenderId': '379123304454'
});
const messaging = firebase.messaging();

var self = this;

this.addEventListener('push', function (event) {
    console.log('Received push');
    var notificationTitle = 'Hello';
    var notificationOptions = {
      body: 'Thanks for sending this push msg.',
      icon: './assets/intel-logo-blue-100.png',
      badge: './assets/intel-logo-white-100.png',
      tag: 'mail-push-demo-notification',
      data: {
        url: 'https://developers.google.com/web/fundamentals/getting-started/push-notifications/'
      }
    };
    
  if (event.data) {
    var dataText = event.data.text();
    var jsonDataText = JSON.parse(dataText);
    notificationTitle = jsonDataText.notification.title; // 'Received Payload';
    notificationOptions.body = jsonDataText.notification.body; // 'Push data: \'' + dataText + '\'';
  }

  event.waitUntil(Promise.all([self.registration.showNotification(notificationTitle, notificationOptions)]));
});

this.addEventListener('notificationclick', function (event) {
    event.notification.close();

    //This is to navigate when clicking on notification
    // var clickResponsePromise = Promise.resolve();
    // if (event.notification.data && event.notification.data.url) {
    //     clickResponsePromise = clients.openWindow(event.notification.data.url);
    // }

    // event.waitUntil(Promise.all([clickResponsePromise, self.analytics.trackEvent('notification-click')]));
});
  
  self.addEventListener('notificationclose', function (event) {
    // event.waitUntil(Promise.all([self.analytics.trackEvent('notification-close')]));
  });
