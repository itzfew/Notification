importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDLKPOqok8VS3gR4TAEGCEH4IEJL8kKpvw",
    authDomain: "ind-edu-f63b0.firebaseapp.com",
    projectId: "ind-edu-f63b0",
    storageBucket: "ind-edu-f63b0.firebasestorage.app",
    messagingSenderId: "405906160405",
    appId: "1:405906160405:web:7040d4f0118fa01d13071c",
    measurementId: "G-EPQM943Y2V"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

self.addEventListener('push', event => {
    const payload = event.data.json();
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon.png'
    };
    event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});
