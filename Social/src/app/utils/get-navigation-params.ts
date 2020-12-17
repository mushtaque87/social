import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

function getNavigationParams<T>(
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
): T {
  return (navigation.state as any).params || {};
}

export default getNavigationParams;
