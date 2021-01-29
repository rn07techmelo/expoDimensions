import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Mytextinput from "../../components/Mytextinput";
import Mybutton from "../../components/Mybutton";
import styles from "./styles";

const image = require("../../assets/images/screenbg.png");

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground source={image} style={styles.backgroundImage}>
          <View>
            <Mytextinput
              placeholder="Enter Email"
              onChangeText={(text) => this.setState({ text })}
            />
          </View>
          <View style={{ marginVertical: 15 }}>
            <Mytextinput
              placeholder="Enter Email"
              onChangeText={(text) => this.setState({ text })}
            />
          </View>
          <View>
            <LinearGradient
              colors={["#FF2C17", "#FF7F72"]}
              style={styles.button}
            >
              <Mybutton title="LogIn" />
            </LinearGradient>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
