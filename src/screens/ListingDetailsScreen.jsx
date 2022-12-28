import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/Text";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View style={{ width: "100%" }}>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title='Mosh Hamedani'
            subTitle='5 Listings'
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "red",
  },
  title: {
    fontSize: 24,
    color: colors["black"],
    fontWeight: "500",
  },
  price: {
    color: colors["secondary"],
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
