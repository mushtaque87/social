import React from "react";
import {setGreenStatusBar} from '../utils/status-bar'
import {brandColors} from "./common-styles";
import {Image, ImageStyle} from "react-native";
import Text from "./text";
import {Container, Content, View} from "native-base";

const logo = "../assets/images/logo.svg";
const iconHeart = "../assets/images/carousel4.png";

const SplashScreen = () => {
  setGreenStatusBar();
  return <Container>
    <Content style={{backgroundColor: brandColors.green4, marginTop:200}}>
      <Image style={{width: 120, alignSelf: "center"} as ImageStyle} source={require(logo)} resizeMode="contain" />
      <View style={{display: "flex", alignSelf: "center", flexDirection: "row",
        alignItems: "center", justifyContent: "center",}}>
        <Text style={{fontSize: 30, paddingRight: 20, color: brandColors.petrol, fontWeight: "bold"}}>
          Social
        </Text>
        <Image style={{width: 40} as ImageStyle} source={require(iconHeart)} resizeMode="contain"/>
      </View>
    </Content>
  </Container>;
};

export default SplashScreen;
