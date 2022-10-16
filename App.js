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
import AppPicker from "./src/components/AppPicker";
import AppTextInput from "./src/components/AppTextInput";

import Screen from "./src/components/Screen";
import AccountScreen from "./src/screens/AccountScreen";
import ListingScreen from "./src/screens/ListingScreen";
import LoginScreen from "./src/screens/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [category, setCategory] = useState(categories[0]);
  return <LoginScreen />;
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
