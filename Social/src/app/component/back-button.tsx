import * as React from 'react';
import {
  NavigationInjectedProps,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {BackHandler} from 'react-native';
import HeaderButton from './header-button';
import IconName from '../utils/icon-name';

interface IBackButtonProps extends NavigationInjectedProps {
  onPress?(navigation: NavigationScreenProp<NavigationState>): void;
}

class BackButton extends React.PureComponent<IBackButtonProps> {
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid,
    );
  }

  public render() {
    const {navigation, onPress} = this.props;
    return (
      <HeaderButton
        msgId="common.done"
        icon={IconName.Back}
        navigation={navigation}
        onPress={onPress || this.onPress}
      />
    );
  }

  private handleBackButtonPressAndroid = () => {
    if (!this.props.navigation.isFocused()) {
      return false;
    }
    this.onPress();
    return true;
  };

  private onPress = () => {
    const onBack = this.props.navigation.getParam('onBack');
    if (typeof onBack === 'function') {
      onBack();
    } else {
      this.props.navigation.pop();
    }
  };
}

export default BackButton;
