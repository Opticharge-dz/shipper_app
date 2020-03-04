import {Notifications} from 'react-native-notifications';
import _ from 'lodash';
import {Platform} from 'react-native';

export const setupPushNotifications = (
  device,
  createDevice,
  updateDevice,
  deleteDevice,
  resetDevice,
) => {
  Notifications.registerRemoteNotifications();
  Notifications.events().registerRemoteNotificationsRegistered(
    async (event: Registered) => {
      try {
        if (_.isEmpty(device) && event.deviceToken && !device.registration_id) {
          await createDevice({
            registration_id: event.deviceToken,
            type: Platform.OS,
          });
        } else {
          if (event.deviceToken !== device.registration_id) {
            await deleteDevice({registration_id: device.registration_id});
            await createDevice({
              registration_id: event.deviceToken,
              type: Platform.OS,
            });
          }
        }
      } catch (e) {
        console.warn('NOTIFICATIONS_ERROR', e);
        resetDevice();
      }
    },
  );
  Notifications.events().registerRemoteNotificationsRegistrationFailed(
    (event: RegistrationError) => {
      console.warn('NOTIFICATIONS_ERROR', event);
      resetDevice();
    },
  );
  // Notifications.requestPermissions();

  // TODO: check this
  Notifications.events().registerNotificationReceivedForeground(
    (
      notification: Notification,
      completion: (response: NotificationCompletion) => void,
    ) => {
      console.log(JSON.stringify(notification.payload));

      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      completion({alert: true, sound: true, badge: false});
    },
  );
  Notifications.events().registerNotificationReceivedBackground(
    (
      notification: Notification,
      completion: (response: NotificationCompletion) => void,
    ) => {
      console.log(JSON.stringify(notification.payload));

      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      completion({alert: true, sound: true, badge: false});
    },
  );
  Notifications.events().registerNotificationOpened(
    (notification: Notification, completion: () => void) => {
      console.log(JSON.stringify(notification.payload));
      completion();
    },
  );
  // TODO: check this
};
