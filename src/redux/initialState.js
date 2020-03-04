export default {
  // UI state
  global: {
    language: 'en',
    isRTL: false,
    isConnected: false,
  },
  // auth
  auth: {
    facebookProviderToken: '', // provider token
    token: '', // access token
    // user info
    user: {
      id: '',
      email: '',
      first_name: '',
      last_name: '',
      full_name: '',
      phone: '',
      avatar: '',
      facebook_id: '',
      facebook_profile: '',
      is_signed_up: false,
    },
  },
  currencies: {}, // currencies with rates
  countries: [],
  cities: [],
  offers: {},
  // push notification
  device: {},
};
