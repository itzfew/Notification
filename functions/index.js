const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.subscribeToTopic = functions.https.onCall(async (data, context) => {
    const { token, topic } = data;
    try {
        await admin.messaging().subscribeToTopic(token, topic);
        return { message: `Subscribed ${token} to ${topic}` };
    } catch (error) {
        throw new functions.https.HttpsError('internal', 'Error subscribing to topic', error);
    }
});

exports.sendNotification = functions.https.onCall(async (data, context) => {
    const { topic, notification } = data;
    const message = {
        notification: {
            title: notification.title,
            body: notification.body
        },
        topic: topic
    };

    try {
        await admin.messaging().send(message);
        return { message: 'Notification sent successfully' };
    } catch (error) {
        throw new functions.https.HttpsError('internal', 'Error sending notification', error);
    }
});
