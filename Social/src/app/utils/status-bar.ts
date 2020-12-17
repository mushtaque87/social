import { brandColors } from "../component/common-styles";
import { StatusBar, StatusBarStyle } from "react-native";

interface Style {
  barStyle: StatusBarStyle;
  backgroundColor: string;
}

const darkStyle: Style = {
  backgroundColor: "#3A5E66",
  barStyle: "light-content"
};

const lightStyle: Style = {
  backgroundColor: brandColors.pureWhite,
  barStyle: "dark-content"
};

const greenStyle: Style = {
  backgroundColor: brandColors.green,
  barStyle: "dark-content"
};

const styleHistory: Style[] = [];

function setDarkStatusBar() {
  setStyle(darkStyle);
}

function setGreenStatusBar() {
  setStyle(greenStyle);
}

function setLightStatusBar() {
  setStyle(lightStyle);
}

function setCustomStatusBar(style: Style) {
  setStyle(style);
}

function undoStatusBarStyle() {
  styleHistory.pop();
  const prevStyle = styleHistory.pop();
  if (prevStyle) {
    setStyle(prevStyle);
  }
}

function setStyle(style: Style) {
  styleHistory.push(style);
  StatusBar.setBarStyle(style.barStyle);
  StatusBar.setBackgroundColor(style.backgroundColor);
}

export {
  setDarkStatusBar,
  setLightStatusBar,
  setCustomStatusBar,
  undoStatusBarStyle,
  setGreenStatusBar
};
