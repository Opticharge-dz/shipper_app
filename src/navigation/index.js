import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ROUTES from './routes';
import LABELS from './labels';

//views
import Login from '../views/login';
import Operations from "../views/operations"
import Paiement from "../views/paiement"

const DrawerNavigator = createDrawerNavigator({
  [ROUTES.OPERATIONS]:{
    screen:Operations,
    navigationOptions: () => ({
        
      drawerLabel: LABELS.OPERATIONS,
        drawerIcon: ({ tintColor }) => (
          <Icon
              name="local-offer"
              color={tintColor}
              size={25}

          />
      ),
    }),
  },
 
 
  [ROUTES.PAIEMENT]:{
    screen:Paiement,
    navigationOptions: () => ({
        
      drawerLabel: LABELS.PAIEMENT,
        drawerIcon: ({ tintColor }) => (
          <Icon
              name="local-shipping"
              color={tintColor}
              size={25}

          />
      ),
    }),
  },
  [ROUTES.SUPPORT]: {
    screen:Operations,
    navigationOptions: () => ({
        
      drawerLabel: LABELS.SUPPORT,
        drawerIcon: ({ tintColor }) => (
          <Icon
              name="date-range"
              color={tintColor}
              size={25}

          />
      ),
    }),
  },
  [ROUTES.RATE]:{
    screen:Paiement,
    navigationOptions: () => ({
        
      drawerLabel: LABELS.RATE,
        drawerIcon: ({ tintColor }) => (
          <Icon
              name="attach-money"
              color={tintColor}
              size={25}

          />
      ),
    }),
  },


 },
 {
  contentOptions:{
    iconContainerStyle:{
      opacity: 1,
    },
    itemsContainerStyle:{paddingVertical: 10},
    activeTintColor: GLOBAL.primaryColor,
   
    activeBackgroundColor:GLOBAL.primaryColorRgba,
    inactiveTintColor: "black",
    labelStyle:{fontFamily: GLOBAL.fontFamily,fontSize: 16,},
    activeLabelStyle:{fontWeight: "bold",}
  },
  drawerWidth:"80%",
  contentComponent: CustomDrawerContentComponent
});
const App = createStackNavigator(
  {
    [ROUTES.HOME]: {
      screen: DrawerNavigator,
    },
   
  },
  {
    initialRouteName: ROUTES.HOME,
    headerMode: 'none',
    header: null,
  },
);


const Root= createAppContainer(createSwitchNavigator(
  {
    [ROUTES.AUTHlOADING]: AuthLoadingScreen,
    [ROUTES.APP]:App,
    [ROUTES.AUTH]: Login,
   },
  {
    initialRouteName:[ROUTES.AUTHlOADING],
    headerMode: 'screen' ,
  }
));

export default Root;