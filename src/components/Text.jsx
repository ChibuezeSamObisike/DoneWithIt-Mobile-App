import React from "react";
import { Text, StyleSheet } from "react-native";
//import styles from "./AppText/styles";

import defaultStyles from "../config/styles";

const AppText = ({ children, style, ...rest }) => {
  return (
    <Text {...rest} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
};

//const styles = StyleSheet.create({});

export default AppText;
