import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={{ marginBottom: 7 }}>{title}</AppText>
        <AppText style={{ color: colors.secondary, fontWeight: "bold" }}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { height: 300, width: "100%" },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    width: "100%",
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
});

export default Card;
