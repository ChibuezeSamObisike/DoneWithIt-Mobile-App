import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

import ListingEditScreen from "./src/screens/ListingEditScreen";
import Screen from "./src/components/Screen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./src/navigation/AuthNavigator";

import navigationTheme from "./src/navigation/navigationTheme";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
