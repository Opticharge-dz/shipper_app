import {
  // Dimensions,
  StyleSheet,
} from 'react-native';
import THEME from '../../theme';

// const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: THEME.COLOR_WHITE,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    // width: '100%',
    // marginBottom: 40,
  },

  headerLogo: {
    width: 112,
    marginLeft: 16,
  },

  background_top: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  addOfferFAB: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

  containerSpinner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  currencyPickerContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
  },
  currencyTitle: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_TITLE,
    fontWeight: THEME.WEIGHT_MEDIUM,
    color: THEME.COLOR_WHITE,
    marginVertical: 8,
  },
  currencyName: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_BODY,
    fontWeight: THEME.WEIGHT_BOLD,
    color: THEME.COLOR_WHITE,
    textAlign: 'center',
    marginVertical: 8,
  },
  currencyCode: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_HEADING,
    fontWeight: THEME.WEIGHT_BOLD,
    color: THEME.COLOR_WHITE,
  },

  rateTitle: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_TITLE,
    fontWeight: THEME.WEIGHT_MEDIUM,
    color: THEME.COLOR_DARKER,
    marginTop: 72,
    marginBottom: 16,
  },
  rateContainer: {
    borderRadius: 4,
    minWidth: 180,
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 32,
    marginHorizontal: 8,
  },
  rateName: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_BODY,
    fontWeight: THEME.WEIGHT_LIGHT,
    color: THEME.COLOR_WHITE,
  },
  rateValue: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_TITLE,
    fontWeight: THEME.WEIGHT_BOLD,
    color: THEME.COLOR_WHITE,
  },
  rateDate: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_CAPTION,
    fontWeight: THEME.WEIGHT_REGULAR,
    color: THEME.COLOR_LIGHTER,
    marginTop: 16,
  },

  offerTitle: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_TITLE,
    fontWeight: THEME.WEIGHT_MEDIUM,
    color: THEME.COLOR_DARKER,
    marginTop: 24,
    marginBottom: 0,
  },
  walletIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  offerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
  },
  offerContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerOwner: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_BUTTON,
    fontWeight: THEME.WEIGHT_BOLD,
    color: THEME.COLOR_DARKER,
  },
  offerAddress: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_BODY,
    fontWeight: THEME.WEIGHT_REGULAR,
    color: THEME.COLOR_DEFAULT,
  },
  offerAmount: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.SIZE_TITLE,
    fontWeight: THEME.WEIGHT_BOLD,
    color: THEME.COLOR_PRIMARY,
  },
});
