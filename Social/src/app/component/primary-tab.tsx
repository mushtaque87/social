import React, { Component }  from "react";
import _ from "lodash";
import { withNavigation, NavigationInjectedProps } from "react-navigation";
import { BottomTabBar } from "react-navigation-tabs";
import { createRouteConfig } from "./create-route-config"
import {GlobalEventEmitter} from "helpers/global-events";

interface State {
  isMoneyTransferEnabled: boolean;
  isInsuranceEnabled: boolean;
  isLoadServiceEnabled: boolean;
  isAirtimeServiceEnabled: boolean;

}

class PrimaryTab extends React.Component<NavigationInjectedProps, State> {
  public state: State = {
  };

   public componentDidMount(): void {
   }

   public componentWillUnmount(): void {
   }

  public render() {
    const bottomTabBarProps = this.getProps();
    return (<BottomTabBar {...bottomTabBarProps}/>);
  }


  private getProps() {
     //console.log('Props',this.props)
    const activeTabIndex = this.props.navigation.state.index;
    const defaultRoutes = createRouteConfig();
    const defaultRoutesKeys = Object.keys(defaultRoutes);
    //console.log('defaultRoutesKeys', defaultRoutesKeys);
    const activeKey = defaultRoutesKeys[activeTabIndex];
    // const restrictedRoutes = this.getRestrictedRoutes();
    const restrictedRoutes = [];
    let routes = this.getRoutes(restrictedRoutes);
    //console.log('routes', routes);

     GlobalEventEmitter.emitBottomTabNavigatorChange(routes);
    const _routes = this.filterBySystemPreferences(routes);
    //console.log('_routes', _routes);
     let index = _routes.findIndex(item => item.key === activeKey);
    const bottomTabBarProps = {
      ...this.props,
      navigation: {
        ...this.props.navigation,
        state: {
          ...this.props.navigation.state,
          routes: _routes,
          index: index,
        }
      },
      onTabPress: (key) => {
        console.log('onTabPress', key);
        this.props.navigation.navigate(key.route.key);
      },
      onTabLongPress: (ref) => {
        this.props.navigation.navigate(ref.route.key);
      }
    };
    return bottomTabBarProps;
  }

  private filterBySystemPreferences(routes) {
    return routes
  }

  private getRoutes(routes){
    const { state } = this.props.navigation;
    return state.routes.filter(r => !routes.includes(r.key))
  }

}

export default PrimaryTab;
