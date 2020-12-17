import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import Button from "../component/button";
import Route from "../utils/route";
import withDIContainer, {
  IWithDIContainerProps,
} from '../component/with-di-container';

interface ISignUpFormContainerProps
  extends NavigationInjectedProps,
    IWithDIContainerProps{}

class LoginScreen extends Component<ISignUpFormContainerProps> {

  componentDidMount= async () => {
    const session = await this.props.diContainer.storage.getSession();
    console.log('Login session',session)
    this.props.navigation.navigate(session ? '_Dashboard' : '_Onboarding');
  }

  onLoginPress = async () => {
    console.log('onLoginPress');
     //this.props.navigation.navigate(Route.SignUp)
    await this.props.diContainer.storage.saveSession({username:'mushtaque',id:'123',attributes:null})
     this.props.navigation.navigate(Route.Swap)
  }

  onSignPress = () => {
    console.log('onSignPress');
    this.props.navigation.navigate(Route.SignUp)
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Login
        </Text>
        <Button
          disabled={false}
          loading={false}
          style={{marginBottom: 24, margin: 20}}
          msgId="loginScreen.login"
          onPress={this.onLoginPress}
        />
        <Button
          disabled={false}
          loading={false}
          style={{marginBottom: 24, margin: 20}}
          msgId="signUpScreen.signup"
          onPress={this.onSignPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default (withNavigation,withDIContainer(LoginScreen));
