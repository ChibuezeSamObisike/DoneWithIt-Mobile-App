import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HelloWorld;
