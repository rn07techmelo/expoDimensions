import { Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
  mainContainer: {
    height: window.height,
    width: window.width,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: window.width,
    height: window.height,
    //flex: 1,
    //resizeMode: "cover",
    justifyContent: "center",
  },
  textstyle: {
    width: window.width * 0.9,
    textAlign: "center",
    margin: 50,
  },
  textinput: {
    marginVertical: 5,
  },
});

export default styles;
