import * as Sentry from '@sentry/react-native';
import {IS_DEV} from '../config';

export const logging = err => {
  if (!IS_DEV) {
    Sentry.captureMessage(JSON.stringify(err), 'warning'); // 'info', 'warning', or 'error'
  } else {
    console.warn(JSON.stringify(err));
  }
};
