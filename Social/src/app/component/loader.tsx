import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet
} from "react-native";

// tslint:disable-next-line:no-empty-interface
interface ILoaderProps extends ActivityIndicatorProps {}

class Loader extends React.PureComponent<ILoaderProps> {
  public render() {
    const { style, ...restProps } = this.props;
    return (
      <ActivityIndicator style={[styles.indicator, style]} {...restProps} />
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});

export { ILoaderProps };
export default Loader;
