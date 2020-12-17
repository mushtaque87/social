
import OnboardingNavigator from './onboarding-navigator';
import withDIContainer, {IWithDIContainerProps,} from './with-di-container';
import * as React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationActions,
  NavigationInjectedProps,
  NavigationScreenProp,
  NavigationState,
  StackActions,
} from 'react-navigation';
import PrimaryTabNavigator from "./primary-tab-navigator";


interface IBootstrapProps
  extends NavigationInjectedProps,
    IWithDIContainerProps {}

//
// const AuthNavigator = createSwitchNavigator(
//   {
//     _Onboarding: {
//       screen: OnboardingNavigator,
//     },
//     _Dashboard: {
//       screen: PrimaryTabNavigator,
//     },
//   },
//   {
//     initialRouteName: '_Onboarding',
//   },
// );

/*
class Bootstrap extends React.Component<IBootstrapProps> {
  private static NetInfoEventListener: NetInfoSubscription;

  public render() {
    return <AuthNavigator navigation={this.props.navigation}/>;
  }

  public async componentDidMount() {
    await this.initialize();
  }

  public componentWillUnmount() {
    const {diContainer} = this.props;
  }

  private initialize = async () => {
    const {diContainer, session} = this.props;
    Bootstrap.NetInfoEventListener = NetInfo.addEventListener(this.handleFirstConnectivityChange);
  };

  private async navigateToInitialRoute() {
    const {session, navigation, diContainer} = this.props;

    const {isConnected} = await NetInfo.fetch();

    Bootstrap.NetInfoEventListener();
    navigation.navigate(Route.Dashboard);
  }

  private navigateAndChangeInitialRoute(routeName) {
    const {navigation} = this.props;
    navigation.navigate(routeName);
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName})],
    });
    navigation.dispatch(resetAction);
  }

  private handleFirstConnectivityChange = async ({isConnected}: NetInfoState) => {
    this.navigateToInitialRoute();
  };
  //
  // private navigateToLoadLocations() {
  //   this.props.navigation.navigate(Route.TopUp);
  // }

}
*/
const RootNavigator = createSwitchNavigator(
  {
    _Onboarding: {
      screen: OnboardingNavigator,
    },
    _Dashboard: {
      screen: PrimaryTabNavigator,
    },
  },
  {
    initialRouteName: '_Onboarding',
  },
);

export default createAppContainer(RootNavigator);
