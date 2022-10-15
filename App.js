// import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View,
} from "react-native";
import AppText from "./src/components/AppText";
import AppButton from "./src/components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Card from "./src/components/Card";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import MessagesScreen from "./src/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
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
