import BackButton from "./back-button";
import { brandColors, headerStyle, pageStyle } from "./common-styles";
// import HelpButton from "components/help-button";
import SwapScreen from "../screens/swap-screen";
// import ToggleDrawerButton from "components/toggle-drawer-button";
// import TransactionPage from "components/transaction-page";
import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationScreenOptions } from '@types/react-navigation';
import { INavigationOptionsArg } from "../utils/navigation-options-arg";
import Route from "../utils/route";
import ProfileHeaderButton from "./profile-header-button";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import getNavigationParams from "../utils/get-navigation-params";
import withDIContainer, {IWithDIContainerProps} from "./with-di-container";
import LoginScreen from "../screens/login-screen";

const styles = StyleSheet.create({
  page: pageStyle
});

const SwapNavigator = createStackNavigator(
  {
    _Default: {
      navigationOptions: (arg: INavigationOptionsArg) => {
        const { onPress , diContainer } = getNavigationParams(
          arg.navigation
        );
        return {
          //title: 'Home',
          headerRight: <ProfileHeaderButton
            style={{backgroundColor:'red', margin:10}}
            url={'../assets/images/tab-icon-home.png'}
            onPress={ async () => {
              diContainer.storage.clearAsyncStorage().then(async (value) => {
                console.log('diContainer.storage', await diContainer.storage.getSession())
                //setTimeout(arg.navigation.navigate("_Onboarding"),100)
                arg.navigation.navigate("_Onboarding")
              });


              //arg.navigation.navigate("_Onboarding")
            }}
          />,
          // headerRight: <HelpButton/>
        } as NavigationScreenOptions;
      },
      screen: SwapScreen
    },
  },
  {
    // cardStyle: styles.page,
    initialRouteName: "_Default",
    navigationOptions: (arg: any) => {
      return {
        // headerLeft: <BackButton navigation={arg.navigation} />,
        headerStyle: {
          elevation: headerStyle.elevation,
          height: headerStyle.height,
          maxHeight: headerStyle.height
        },
        headerTintColor: brandColors.petrol,
      };
    }
  }
);

export default SwapNavigator;
