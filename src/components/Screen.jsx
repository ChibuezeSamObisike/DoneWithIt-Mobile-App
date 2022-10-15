import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Constants from "expo-constants";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
