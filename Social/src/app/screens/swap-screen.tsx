import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import withDIContainer, {IWithDIContainerProps} from "../component/with-di-container";
import { useNavigation } from '@react-navigation/native';
import ProfileHeaderButton from "../component/profile-header-button";


interface ISwapScreenProps
  extends NavigationInjectedProps,
    IWithDIContainerProps{}

class SwapScreen extends Component<ISwapScreenProps> {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home New',
      headerRight: <ProfileHeaderButton
        style={{backgroundColor:'red', margin:10}}
        url={'../assets/images/tab-icon-home.png'}
        onPress={ async () => {
          // console.log('OnPress', arg.navigation)
          // const session = await arg.navigation.diContainer.storage.clearAsyncStorage();
          //arg.navigation.navigate("_Onboarding")
          navigation.getParam('logOut')
        }}
      />,
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({ diContainer: this.props.diContainer});
  }

  logOut = () => {
  console.log('Logout');
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>
        Home
        </Text>
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

export default (withDIContainer(SwapScreen));
