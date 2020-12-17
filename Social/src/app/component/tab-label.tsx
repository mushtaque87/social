import { brandColors } from "./common-styles";
import Text from "./text";
import React, {useCallback, useEffect, useRef, useState} from "react";
import { FormattedMessage } from "react-intl";
import {Animated, Easing, StyleSheet, View,Dimensions} from "react-native";
import Route from "../utils/route";
// import SystemPreferences, {bottomTabNavigatorPulsatingStateEnum} from "utils/system-preferences";
import {Platform} from 'react-native';

interface ITabLabelProps extends IOptions {
  routeName: string;
}

interface IOptions {
  tintColor: string | null;
  focused: boolean;
}

export const routeNameMsgIdMap = {
  [Route.Swap]: "primaryTab.home",
  [Route.Pool]: "primaryTab.utility",
};

const TabLabel: React.FC<ITabLabelProps> = ({routeName, focused, tintColor}) => {
  const spinValue = useRef(new Animated.Value(0.2)).current;
  //console.log("routeName for tab bar: " , routeName);
  const [isPulsating, setPulsating] = useState(false);
  let animateHasBeenCalled = useRef(false);

  const animate = useCallback(() => {
    spinValue.setValue(0.2);
    Animated.timing(spinValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1500,
      easing: Easing.inOut(Easing.quad)
    }).start(animate);
  }, []);

  // const checkPulsating = useCallback(() => {
  //   if (SystemPreferences.systemPreferences.buttonTabNavigatorPulsatingState[routeName] === bottomTabNavigatorPulsatingStateEnum.pulsating) {
  //     setPulsating(true);
  //   } else {
  //     setPulsating(false);
  //   }
  // }, []);

  useEffect(() => {
    if (isPulsating && !animateHasBeenCalled.current) {
      animate();
      animateHasBeenCalled.current = true;
    }
    return () => {
      spinValue.stopAnimation();
      spinValue.removeAllListeners();
    }
  }, [isPulsating, animateHasBeenCalled.current]);

  // useEffect(() => {
  //   const systemPreferences = SystemPreferences.getInstance();
  //   checkPulsating();
  //   return systemPreferences.subscribe(checkPulsating);
  // }, []);

  return (
    <View style={{width: "100%"}}>
      <Text style={[styles.label, focused ? styles.labelFocused : undefined]}>
        <FormattedMessage id={routeNameMsgIdMap[routeName]}/>
      </Text>
      {
        isPulsating ?
          <View
            style={styles.circleContainer}
          >
            <Animated.View style={[styles.circle, {transform: [{scale: spinValue}]}]}/>
          </View>
          :
          null
      }
    </View>
  );
};

const getCircleStyles = (diameter: number) => {
  return {
    width: diameter*2,
    height: diameter*2,
    borderRadius: diameter,
  }
};

const styles = StyleSheet.create({
  label: {
    color: brandColors.petrol3,
    fontFamily: "Dubai",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 16,

    marginBottom: Platform.OS === 'ios'? (Dimensions.get('window').height >= 812 ? -20 : 10): 8 ,
    textAlign: "center"
  },
  labelFocused: {
    color: brandColors.petrol
  },
  circleContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  circle: {
    ...getCircleStyles(45),
    backgroundColor: brandColors.green,
    opacity: .3,
  }
});

function makeTabLabel(routeName: string) {

  return (options: IOptions) => <TabLabel routeName={routeName} {...options} />;

}

export { makeTabLabel };
export default TabLabel;
