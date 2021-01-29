/*Custom TextInput*/
import React from "react";
import { View, TextInput, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Mytextinput = (props) => {
  return (
    <View
      style={{
        marginLeft: window.width * 0.09,
        marginRight: window.width * 0.09,
        height: window.height * 0.1,
        borderWidth: 0.5,
        borderRadius: 15,
        backgroundColor: "#fafafa",
        paddingTop: window.height * 0.02,
        paddingLeft: 5,
      }}
    >
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#000a12"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};
export default Mytextinput;
