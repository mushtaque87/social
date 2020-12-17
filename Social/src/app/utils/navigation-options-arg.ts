import { NavigationScreenProp, NavigationState } from "react-navigation";
import { NavigationStackProp } from "react-navigation-stack";

interface INavigationOptionsArg {
  navigation: NavigationScreenProp<NavigationState> & NavigationStackProp;
}

export { INavigationOptionsArg };
