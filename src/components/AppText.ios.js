import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AppText = ({ children, ...rest }) => {
  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
