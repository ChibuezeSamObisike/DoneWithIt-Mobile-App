// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View,
  TextInput,
} from "react-native";
import AppPicker from "./src/components/Picker";
import AppTextInput from "./src/components/TextInput";

import Screen from "./src/components/Screen";
import AccountScreen from "./src/screens/AccountScreen";
import ListingEdit from "./src/screens/ListingEditScreen";
import ListingScreen from "./src/screens/ListingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import MessagesScreen from "./src/screens/MessagesScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [category, setCategory] = useState(categories[0]);
  return <ListingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0%",
  },
});
