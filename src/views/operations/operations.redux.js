import {connect} from 'react-redux';
import View from './home.view';
import {logout} from '../../redux/logics/auth';
import {fetchCurrencies} from '../../redux/logics/currencies';
import {fetchRates} from '../../redux/logics/rates';
import {fetchOffers, deleteOffer} from '../../redux/logics/offers';
import {
  createDevice,
  deleteDevice,
  resetDevice,
  updateDevice,
} from '../../redux/logics/device';

const mapStateToProps = state => ({
  user: state.auth.user,
  token: state.auth.token,
  isConnected: state.global.isConnected,
  offers: state.offers,
  currencies: state.currencies,
  isRTL: state.global.isRTL,
  device: state.device,
});

const mapDispatchToProps = dispatch => ({
  logout: token => dispatch(logout(token)),
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  fetchRates: () => dispatch(fetchRates()),
  fetchOffers: () => dispatch(fetchOffers()),
  deleteOffer: data => dispatch(deleteOffer(data)),
  createDevice: data => dispatch(createDevice(data)),
  deleteDevice: data => dispatch(deleteDevice(data)),
  updateDevice: (data, registration_id) =>
    dispatch(updateDevice(data, registration_id)),
  resetDevice: () => dispatch(resetDevice()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
