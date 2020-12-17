import React from 'react';
import Route from "../utils/route";
import { makeTabIcon } from "./tab-icon";
import { makeTabLabel } from "./tab-label";
import {INavigationOptionsArg} from "../utils/navigation-options-arg";
import SwapNavigator from "./swap-navigator";
import PoolNavigator from "./pool-navigator";
import BackButton from "./back-button";
import ProfileHeaderButton from "./profile-header-button";

const tabIcons = {
  active: {
    [Route.Swap]: require("../assets/images/tab-icon-home.png"),
    [Route.Pool]: require("../assets/images/tab-icon-load.png"),
  },
  inactive: {
    [Route.Swap]: require("../assets/images/tab-icon-home-inactive.png"),
    [Route.Pool]: require("../assets/images/tab-icon-load-inactive.png"),
  }
} as any;

const tabIconStyle = {
  height: 32,
  width: 32
};

const getNavOptions = ({navigation: {state: {routeName}}}: INavigationOptionsArg) => ({
  tabBarIcon: makeTabIcon(
    tabIcons.active[routeName], tabIcons.inactive[routeName],
    routeName as Route , tabIconStyle
  ),
  tabBarLabel: makeTabLabel(routeName),
});

export function createRouteConfig() {
  return {
    [Route.Swap]: {
      navigationOptions: getNavOptions,
      screen: SwapNavigator
    },
    [Route.Pool]: {
      navigationOptions: getNavOptions,
      screen: PoolNavigator
    },
  };
}
