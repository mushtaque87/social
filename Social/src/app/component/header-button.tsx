import { brandColors } from "./common-styles";
import IconButton from "./icon-button";
import * as React from "react";
import { StyleSheet } from "react-native";
import {
  NavigationInjectedProps,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";
import IconName from "../utils/icon-name";
import MsgId from "../utils/msg-id";

interface IHeaderButtonProps extends Partial<NavigationInjectedProps> {
  color?: string;
  icon: IconName;
  msgId?: MsgId;
  onPress?(navigation?: NavigationScreenProp<NavigationState>): void;
}

class HeaderButton extends React.PureComponent<IHeaderButtonProps> {
  public render() {
    return (
      <IconButton
        name={this.props.icon}
        size={32}
        style={styles.btn}
        color={this.props.color || brandColors.petrol}
        onPress={this.onPress}
      />
    );
  }

  private onPress = () => {
    if (this.props.onPress) {
      this.props.onPress(this.props.navigation);
    }
  };
}

const styles = StyleSheet.create({
  btn: {
    marginLeft: 16,
    marginRight: 16
  }
});

export { IHeaderButtonProps };
export default HeaderButton;
