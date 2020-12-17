import { brandColors } from "./common-styles";
import React from "react";
import { Image, StyleSheet } from "react-native";
import Route from "../utils/route";

interface ITabIconProps extends IOptions {
  sourceActive: any;
  sourceInactive: any;
  routeName: Route,
  style?: any;
}

interface IOptions {
  tintColor: string | null;
  focused: boolean;
}

class TabIcon extends React.Component<ITabIconProps> {
  public render() {
    const { focused, sourceActive, sourceInactive, style, routeName} = this.props;
    return (
      <Image
        source={focused ? sourceActive : sourceInactive}
        style={style}
      />
    );
  }
}

function makeTabIcon(sourceActive: any, sourceInactive: any, routeName: Route, style?: any) {
  return (options: ITabIconProps) =>
    <TabIcon sourceActive={sourceActive}
             sourceInactive={sourceInactive}
             routeName={routeName}
             style={style}  {...options} />;
}

export { makeTabIcon };
export default TabIcon;
