import {colors, rem} from './common-styles';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import IconImpl from 'react-native-vector-icons/MaterialCommunityIcons';

type IIconProps = IconProps;

class Icon extends React.PureComponent<IIconProps> {
  public render() {
    const {size, color, style, ...restProps} = this.props;
    return (
      <IconImpl
        size={size || rem(3.2)}
        color={color || colors.black}
        style={[styles.icon, style]}
        {...restProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {},
});

// eslint-disable-next-line no-undef
export {IIconProps};
export default Icon;
