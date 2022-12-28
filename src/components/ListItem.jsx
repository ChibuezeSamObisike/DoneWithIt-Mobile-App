import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Text,
} from "react-native";
import AppText from "./Text";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  IconComponent,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          {IconComponent}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name='chevron-right'
            size={25}
          />
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
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: "500",
  },
  detailsContainer: {
    marginLeft: 10,

    flex: 1,
  },
  subTitle: {
    color: colors.medium,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: "50%",
  },
});

export default ListItem;
