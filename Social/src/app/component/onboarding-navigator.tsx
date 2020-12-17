import {
  brandColors,
  colors,
  headerStyle,
  pageStyle,
  transparentHeaderStyle
} from "./common-styles"

import SwapScreen from "../screens/swap-screen"
import LoginScreen from '../screens/login-screen'
import NavigatorSteps from "./navigator-steps";
import * as React from "react";
import { StyleSheet } from "react-native";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationScreenOptions, NavigationRouteConfig } from '@types/react-navigation';
import { INavigationOptionsArg } from "../utils/navigation-options-arg";
import SignUpScreen from '../screens/signup-screen'
import Route from "../utils/route";
import BackButton from "./back-button";

const styles = StyleSheet.create({
  headerTransparent: transparentHeaderStyle,
  headerTransparentDark: {
    ...transparentHeaderStyle,
    backgroundColor: colors.black
  },
  page: pageStyle
});

const signUpRouteConfig: NavigationRouteConfig = {
  navigationOptions: () => {
    return {
      headerRight: null,
      headerTitle: 'Login'
    } as NavigationScreenOptions;
  },
  screen: LoginScreen
};

const DefaultNavigator = createStackNavigator(
  {
    [Route.Login]: signUpRouteConfig ,
    [Route.SignUp]:{ navigationOptions: (arg: INavigationOptionsArg) => {
        return {
          header: null
        } as NavigationScreenOptions;
      },
      screen: SignUpScreen  },
  },

  {
    initialRouteName: Route.Login,
    defaultNavigationOptions: (arg: any) => {
      return {
        headerLeft:null,
        headerStyle: {
          elevation: headerStyle.elevation,
          height: headerStyle.height,
          maxHeight: headerStyle.height
        },
        headerTintColor: brandColors.petrol
      };
    }
  }
);

// const OnboardingNavigator = createSwitchNavigator(
//   {
//     _Default: {
//       screen: DefaultNavigator
//     }
//   },
//   {
//     initialRouteName: "_Default"
//   }
// );

export default createAppContainer(DefaultNavigator);
