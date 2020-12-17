import { rem, touchableStyle } from "./common-styles";
import Icon from "./icon";
import Loader from "./loader";
import Touchable from "./touchable";
import * as React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import IconName from "../utils/icon-name";

interface IIconButtonProps {
  name: IconName;
  color?: string;
  size?: number;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
}

class IconButton extends React.PureComponent<IIconButtonProps> {
  public render() {
    const { name, color, size, style, loading, onPress } = this.props;
    const loaderSize = size != null && size >= rem(4.8) ? "large" : "small";
    const content = loading ? (
      <Loader color={color} size={loaderSize} />
    ) : (
      <Icon name={name} color={color} size={size} />
    );
    const contentStyle = [
      styles.content,
      size == null ? undefined : { minHeight: size, minWidth: size },
      style
    ];
    return (
      <Touchable accessibilityComponentType="button" onPress={onPress}>
        <View style={contentStyle as any}>{content}</View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 32,
    minWidth: 32
  }
});

export { IIconButtonProps };
export default IconButton;
