import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import AppText from "./Text";

const Card = ({ imageUrl, title, subTitle, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={{ marginBottom: 7 }}>{title}</AppText>
          <AppText style={{ color: colors.secondary, fontWeight: "bold" }}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: { height: 200, width: "100%" },
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
