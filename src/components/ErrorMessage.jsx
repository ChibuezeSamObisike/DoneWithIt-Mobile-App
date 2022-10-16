import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
