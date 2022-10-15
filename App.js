// import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View,
} from "react-native";

import Screen from "./src/components/Screen";
import Icon from "./src/components/Icon";
import ListItem from "./src/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem title='My title' subTitle='My Subtitle' />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0%",
  },
});
