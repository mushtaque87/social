import BackButton from "components/back-button";
import { brandColors, headerStyle, pageStyle } from "./common-styles";
import PoolScreen from "../screens/pool-screen";
import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationScreenOptions } from '@types/react-navigation';
import { INavigationOptionsArg } from "../utils/navigation-options-arg";


const styles = StyleSheet.create({
  page: pageStyle
});

const PoolNavigator = createStackNavigator(
  {
    _Default: {
      navigationOptions: (arg: INavigationOptionsArg) => {
        return {
          // headerLeft: <ToggleDrawerButton navigation={arg.navigation} />,
          // headerRight: <HelpButton/>
        } as NavigationScreenOptions;
      },
      screen: PoolScreen
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
        headerTintColor: brandColors.petrol
      };
    }
  }
);

export default PoolNavigator;
