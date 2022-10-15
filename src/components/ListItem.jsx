import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Text,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({ title, subTitle, image, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    marginRight: 10,
  },
});

export default ListItem;
