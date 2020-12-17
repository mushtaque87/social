import * as React from 'react';
import { brandColors, colors } from "./common-styles";
import PrimaryTab from "./primary-tab";
import { createBottomTabNavigator } from "react-navigation-tabs";
 import Route from "../utils/route";
import { createRouteConfig } from "./create-route-config"
import { createAppContainer } from 'react-navigation';

const navigatorConfig = {
  activeColor: brandColors.petrol,
  barStyle: {
    backgroundColor: colors.white,
    elevation: 10,
    height: 68,
    justifyContent: "center",
    maxHeight: 68,
  },
  inactiveColor: brandColors.petrol3,
  initialRouteName: Route.Swap,
  labeled: true,
  shifting: false,
  tabBarComponent: (props) => (<PrimaryTab {...props} />),
  tabBarOptions: {
    activeTintColor: brandColors.petrol,
    iconStyle: {
      height: 32,
      width: 32
    },
    inactiveTintColor: brandColors.petrol3,
    labelStyle: {

    },
    showLabel: true,
    style: {
      backgroundColor: colors.white,
      borderTopWidth: 0,
      elevation: 30,
      height: 68,
      maxHeight: 68
    }
  }
};

const PrimaryTabNavigator = createBottomTabNavigator(createRouteConfig(), navigatorConfig);

export default  createAppContainer(PrimaryTabNavigator);
