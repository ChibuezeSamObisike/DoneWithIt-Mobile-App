import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

import routes from "../navigation/routes";

import listingsApi from "../api/listings";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 200,
//     image: require("../assets/couch.jpg"),
//   },
// ];

const ListingScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const response = listingsApi.getListings();
    console.log("Api Response", response);
    setListings(response?.data);
  };

  useEffect(() => {
    loadListings();
  }, []);
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              title={item?.title}
              subTitle={`$ ${item?.price}`}
              imageUrl={item?.images[0]?.url}
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAILS, { ...item })
              }
            />
          );
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
