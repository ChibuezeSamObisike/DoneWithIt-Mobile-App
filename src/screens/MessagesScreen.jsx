import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";

import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ListItemSeperator from "./ListItemSeperator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id || Math.random()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
