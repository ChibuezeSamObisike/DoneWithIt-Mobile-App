import React from "react";
import { Text, StyleSheet } from "react-native";
import styles from "./AppText/styles";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "tomato",
  },
});

export default AppText;
