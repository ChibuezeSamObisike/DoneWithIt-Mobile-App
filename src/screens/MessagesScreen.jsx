import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

import ListItem from "../components/ListItem";

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
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={messages}
        //style={{ backgroundColor: "red" }}
        keyExtractor={(message) => message.id || Math.random()}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 10 }}>
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0%",
  },
});

export default MessagesScreen;
