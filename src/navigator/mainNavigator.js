import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps179881Navigator from '../features/Maps179881/navigator';
import Additem179880Navigator from '../features/Additem179880/navigator';
import Maps179876Navigator from '../features/Maps179876/navigator';
import UserProfile179872Navigator from '../features/UserProfile179872/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps179881: { screen: Maps179881Navigator },
Additem179880: { screen: Additem179880Navigator },
Maps179876: { screen: Maps179876Navigator },
UserProfile179872: { screen: UserProfile179872Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
