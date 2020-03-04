import React from 'react';
import _ from 'lodash';
import styles from './home.style';
import {
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  ScrollView,
  View,
  Alert,
  Linking,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  Header as NativeBaseHeader,
  Button as NativeBaseButton,
  Icon as NativeBaseIcon,
  Right as NativeBaseRight,
  Left as NativeBaseLeft,
  Body as NativeBaseBody,
} from 'native-base';
import {FAB, ActivityIndicator} from 'react-native-paper';
import ROUTES from '../../navigation/routes';
import THEME from '../../theme';
import {BACKGROUND_TOP, LOGO_WHITE, WALLET_ICON} from '../../assets/images';
import {showToast} from '../../utils/toast';
import {translate} from '../../i18n';
import TimeAgo from 'react-native-timeago';
import Wrapper from '../../components/wrapper';
import {setupPushNotifications} from '../../utils/push-notifications';

// import LinearGradient from 'react-native-linear-gradient';
// import GradientHeader from '../../components/gradientHeader';

export default class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      currency_index: 0, // index
      currency_keys: [],
    };
    const {
      createDevice,
      deleteDevice,
      updateDevice,
      device,
      resetDevice,
    } = props;
    setupPushNotifications(
      device,
      createDevice,
      updateDevice,
      deleteDevice,
      resetDevice,
    );
  }

  componentDidMount() {
    this.handleRefresh();
  }

  next = () => {
    const {currency_index, currency_keys} = this.state;
    const tmp = (currency_index + 1) % currency_keys.length;
    this.setState({currency_index: tmp});
  };

  previous = () => {
    const {currency_index, currency_keys} = this.state;
    const tmp =
      (currency_index - 1 + currency_keys.length) % currency_keys.length;
    this.setState({currency_index: tmp});
  };

  getCurrentCurrency = () => {
    const {currency_index, currency_keys} = this.state;
    const {currencies} = this.props;
    if (_.isEmpty(currencies) || _.isEmpty(currency_keys)) {
      return false;
    }
    return currencies[currency_keys[currency_index]];
  };

  handleRefresh = () => {
    const {
      fetchCurrencies,
      fetchRates,
      fetchOffers,
      isConnected,
      currencies: local_currencies,
    } = this.props;
    const {isLoading, currency_keys} = this.state;
    if (isConnected && !isLoading) {
      this.setState({isLoading: true}, async () => {
        try {
          const currencies = await fetchCurrencies();
          this.setState({currency_keys: _.map(currencies, v => v.id)});
          await Promise.all([fetchRates(), fetchOffers()]);
        } catch (e) {
          showToast(translate('Error while loading data'));
        } finally {
          this.setState({isLoading: false});
        }
      });
    } else {
      showToast(translate('You are offline'));
    }
    if (_.isEmpty(currency_keys)) {
      this.setState({currency_keys: Object.keys(local_currencies)});
    }
  };

  handleDeleteOffer = offer => {
    const {deleteOffer, isConnected} = this.props;
    if (isConnected) {
      deleteOffer(offer)
        .then(() => {
          showToast(translate('Offer deleted successfully'));
        })
        .catch(() => {
          showToast(translate('Error while deleting the offer'));
        });
    } else {
      showToast(translate('You are offline'));
    }
  };

  handleSelectOffer = offer => {
    Alert.alert(
      translate('Offer {{value}} {{currency}}', {
        value: offer.amount,
        currency: offer.currency,
      }),
      translate('how_to_contact', {
        first_name: offer.user.first_name,
        last_name: offer.user.last_name,
      }),
      [
        {
          text: translate('EMAIL'),
          onPress: () => Linking.openURL(`mailto:${offer.user.email}`),
        },
        {
          text: translate('PHONE'),
          onPress: () => Linking.openURL(`tel:${offer.user.phone}`),
        },
      ],
      {cancelable: true},
    );
  };

  render() {
    const {isLoading} = this.state;
    const {navigation, offers, user, isRTL} = this.props;
    const currency = this.getCurrentCurrency();
    return (
      <>
        <SafeAreaView style={styles.safeAreaView}>
          {/*background*/}
          <Image
            resizeMode="cover"
            style={styles.background_top}
            source={BACKGROUND_TOP}
          />

          {/*<GradientHeader />*/}
          {/*<Header*/}
          {/*  ViewComponent={LinearGradient} // Dont forget this!*/}
          {/*  linearGradientProps={{*/}
          {/*    colors: [THEME.COLOR_GRADIENT_LEFT, THEME.COLOR_GRADIENT_RIGHT],*/}
          {/*    start: {x: 0, y: 0.5},*/}
          {/*    end: {x: 1, y: 0.5},*/}
          {/*  }}*/}
          {/*  // containerStyle={{paddingTop: 0}}*/}
          {/*  containerStyle={{backgroundColor: 'transparent'}}*/}
          {/*  leftComponent={*/}
          {/*    <Image*/}
          {/*      resizeMode="contain"*/}
          {/*      style={styles.headerLogo}*/}
          {/*      source={LOGO_WHITE}*/}
          {/*    />*/}
          {/*  }*/}
          {/*  rightComponent={{*/}
          {/*    icon: 'home',*/}
          {/*    color: 'white',*/}
          {/*    onPress: () => {},*/}
          {/*  }}*/}
          {/*/>*/}

          {/* header*/}
          <NativeBaseHeader transparent>
            <StatusBar
              barStyle="light-content"
              translucent={true}
              backgroundColor="transparent"
            />
            <NativeBaseBody>
              <Image
                resizeMode="contain"
                style={styles.headerLogo}
                source={LOGO_WHITE}
              />
            </NativeBaseBody>
            <NativeBaseRight>
              <NativeBaseButton
                rounded
                style={{
                  backgroundColor: isRTL
                    ? THEME.COLOR_GRADIENT_LEFT
                    : THEME.COLOR_GRADIENT_RIGHT,
                  height: 64,
                }}
                onPress={() => {
                  navigation.navigate(ROUTES.PROFILE);
                }}>
                <NativeBaseIcon
                  name="person"
                  style={{fontSize: 28, color: 'white'}}
                />
              </NativeBaseButton>
            </NativeBaseRight>
          </NativeBaseHeader>

          {isLoading ? (
            <View style={styles.containerSpinner}>
              <ActivityIndicator animating={true} size="large" />
            </View>
          ) : (
            <>
              <View style={styles.container}>
                {/*currencies*/}
                <Text style={styles.currencyTitle}>
                  {translate('Currency')}
                </Text>
                <View style={styles.currencyPickerContainer}>
                  {!_.isEmpty(currency) ? (
                    <>
                      <NativeBaseLeft>
                        <NativeBaseButton onPress={this.previous} rounded light>
                          <NativeBaseIcon
                            name="chevron-left"
                            type="MaterialIcons"
                            style={{
                              fontSize: 28,
                              color: THEME.COLOR_PRIMARY,
                              transform: [{scaleX: isRTL ? -1 : 1}],
                            }}
                          />
                        </NativeBaseButton>
                      </NativeBaseLeft>
                      <NativeBaseBody>
                        <Text style={styles.currencyCode}>
                          1 {currency.id.toUpperCase()} {currency.symbol}
                        </Text>
                        <Text style={styles.currencyName}>{currency.name}</Text>
                      </NativeBaseBody>
                      <NativeBaseRight>
                        <NativeBaseButton onPress={this.next} light rounded>
                          <NativeBaseIcon
                            name="chevron-right"
                            type="MaterialIcons"
                            style={{
                              fontSize: 28,
                              color: THEME.COLOR_PRIMARY,
                              transform: [{scaleX: isRTL ? -1 : 1}],
                            }}
                          />
                        </NativeBaseButton>
                      </NativeBaseRight>
                    </>
                  ) : (
                    <Text style={styles.currencyTitle}>
                      {translate('No Currency available')}
                    </Text>
                  )}
                </View>

                {/*exchange rates*/}
                {_.isEmpty(currency.rates) ? (
                  <Text style={styles.rateTitle}>
                    {translate('No exchange rate available')}
                  </Text>
                ) : (
                  <Text style={styles.rateTitle}>
                    {translate('Exchange rates')}
                  </Text>
                )}
                {!_.isEmpty(currency.rates) && (
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {Object.entries(currency.rates).map(([k, v], ind) => (
                      <View
                        key={k}
                        style={[
                          styles.rateContainer,
                          {
                            backgroundColor: [
                              THEME.COLOR_GRADIENT_LEFT,
                              THEME.COLOR_GRADIENT_RIGHT,
                            ][ind % 2],
                          },
                        ]}>
                        <Text style={styles.rateName}>{v.type}</Text>
                        <Text style={styles.rateValue}>
                          {Math.round(v.value)} {translate('DZD')}
                        </Text>
                        <TimeAgo style={styles.rateDate} time={v.updated_at} />
                      </View>
                    ))}
                  </ScrollView>
                )}
                {/*offers title*/}
                {_.isEmpty(offers) ? (
                  <Text style={styles.offerTitle}>
                    {translate('No Offer available')}
                  </Text>
                ) : (
                  <Text style={styles.offerTitle}>{translate('Offers')}</Text>
                )}
              </View>

              {/*scrollable*/}
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                {/*offers*/}
                {!_.isEmpty(offers) &&
                  Object.entries(offers)
                    .reverse()
                    .map(([k, v], ind, arr) => (
                      <Wrapper
                        key={ind}
                        onPress={() => this.handleSelectOffer(v)}>
                        <View
                          style={[
                            styles.offerContainer,
                            arr.length === ind + 1
                              ? {
                                  marginBottom: 48,
                                }
                              : {},
                          ]}>
                          <View style={styles.offerContainerRow}>
                            {v.user.id === user.id && (
                              <Icon
                                name="delete"
                                type="material"
                                color="red"
                                size={32}
                                containerStyle={{
                                  marginRight: 16,
                                }}
                                onPress={() => {
                                  Alert.alert(
                                    translate('sure_to_delete_offer', {
                                      value: v.amount,
                                      currency: v.currency,
                                    }),
                                    translate('undone_action'),
                                    [
                                      {
                                        text: translate('CANCEL'),
                                        style: 'cancel',
                                      },
                                      {
                                        text: translate('CONFIRM'),
                                        onPress: () =>
                                          this.handleDeleteOffer(v),
                                      },
                                    ],
                                    {cancelable: true},
                                  );
                                }}
                              />
                            )}
                            <Image
                              source={WALLET_ICON}
                              resizeMode="contain"
                              style={styles.walletIcon}
                            />
                            <View>
                              <Text style={styles.offerOwner}>
                                {v.user.first_name} {v.user.last_name}
                              </Text>
                              <Text style={styles.offerAddress}>
                                {v.city_name
                                  ? `${v.city_name} ${v.country_name}`
                                  : v.country_name}
                              </Text>
                            </View>
                          </View>
                          <Text style={styles.offerAmount}>
                            {v.amount} {v.currency}
                          </Text>
                        </View>
                      </Wrapper>
                    ))}
              </ScrollView>
            </>
          )}

          {/*add offer button*/}
          <FAB
            style={styles.addOfferFAB}
            icon="plus"
            onPress={() => navigation.navigate(ROUTES.ADD_OFFER)}
          />
        </SafeAreaView>
      </>
    );
  }
}
