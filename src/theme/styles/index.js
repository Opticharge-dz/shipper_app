import {Dimensions, Platform, StyleSheet} from 'react-native';
import THEME from '../../theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headerContainerStyle: {
    backgroundColor: THEME.COLOR_PRIMARY,
    // height: 64,
    // alignItems: 'flex-start',
    // justifyContent: 'space-around',
  },
  headerTitle: {
    color: THEME.COLOR_WHITE,
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_TITLE,
    fontWeight: THEME.WEIGHT_MEDIUM,
    marginBottom: Platform.select({
      android: 20,
      ios: 16,
    }),
  },
  headerLeftButton: {
    marginBottom: 24,
  },
  headerRightButton: {
    marginBottom: 24,
  },
  centeredItemContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
