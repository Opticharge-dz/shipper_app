import {DefaultTheme} from 'react-native-paper';
import THEME from './index';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: THEME.COLOR_PRIMARY,
    accent: THEME.COLOR_PRIMARY,
    // accent: 'yellow',
  },
};
