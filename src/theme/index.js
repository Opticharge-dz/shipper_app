import {Platform} from 'react-native';

export default {
  // FONT FAMILY
  FONT_FAMILY: Platform.select({
    android: 'Roboto',
    ios: 'Avenir',
  }),
  ARABIC_FONT_FAMILY: Platform.select({
    android: 'sans-serif',
    ios: 'Al Nile',
  }),
  // FONT SIZE
  SIZE_SMALL: 12,
  SIZE_MEDIUM: 14,
  SIZE_LARGE: 16,
  // material design sizes
  SIZE_BUTTON: 14,
  SIZE_CAPTION: 12,
  SIZE_BODY: 14,
  SIZE_SUBHEADING: 16,
  SIZE_TITLE: 20,
  SIZE_HEADING: 24,
  // FONT WEIGHT
  WEIGHT_LIGHT: '200',
  WEIGHT_REGULAR: Platform.select({
    ios: '400',
    android: 'normal',
  }),
  WEIGHT_MEDIUM: '600',
  WEIGHT_BOLD: Platform.select({
    ios: '800',
    android: 'bold',
  }),
  WEIGHT_BLACK: Platform.select({
    ios: '900',
    android: 'bold',
  }),
  // GRADIENT
  COLOR_GRADIENT_LEFT: '#3827B4',
  COLOR_GRADIENT_RIGHT: '#6C18A4',
  // COLORS
  COLOR_PRIMARY_LIGHT: '#6823AA',
  COLOR_PRIMARY: '#6823AA',
  COLOR_PRIMARY_DARK: '#3F25B2',
  // COLOR_SECONDARY_DARK: '#4b61c0',
  // COLOR_SECONDARY: '#5887F9',
  // COLOR_SECONDARY_LIGHT: '#598cff',
  COLOR_WHITE: '#ffffff',
  COLOR_LIGHTER: '#D3D3D3', // for borders and dividers
  COLOR_LIGHT: '#C4C4C4', // for icons and secondary text
  COLOR_DEFAULT: '#696969', // for text
  COLOR_DARK: '#5C5B5B', // for results (source/destination small text)
  COLOR_DARKER: '#515050', // for prices (titles)
  COLOR_BLACK: '#000000',
  // others
  COLOR_STATUS_BAR: '#F0F0F0',
};
