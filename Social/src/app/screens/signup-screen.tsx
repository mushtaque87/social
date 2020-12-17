import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import Button from "../component/button";
import Route from "../utils/route";

class SignUpScreen extends Component<NavigationInjectedProps> {

  onSignUpPress = () => {
    console.log('onLoginPress');
    this.props.navigation.goBack()
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          SignUp
        </Text>
        <Button
          disabled={false}
          loading={false}
          style={{marginBottom: 24, margin:20}}
          msgId="signUpScreen.signup"
          onPress={this.onSignUpPress}
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

export default withNavigation<{}>(SignUpScreen);
