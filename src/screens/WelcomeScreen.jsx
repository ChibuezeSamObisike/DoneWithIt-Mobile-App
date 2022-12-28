import React from "react";
import { View, StyleSheet, ImageBackground, Text, Image } from "react-native";
import AppButton from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What we don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate("Login")} />
        <AppButton
          title='Register'
          color='secondary'
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 10,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
});

export default WelcomeScreen;
