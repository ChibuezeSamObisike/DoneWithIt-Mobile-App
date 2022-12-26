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

const Tweets = ({ navigation }) => {
  const { navigate } = useNavigation();
  return (
    <Screen>
      <Text>Tweets</Text>
      {/* <Link /> */}
      <Button
        title='View Tweet'
        onPress={() =>
          navigate("TweetDetails", { id: "4", name: "Hello OWlrd test" })
        }
      />
    </Screen>
  );
};

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title='Click'
      onPress={() =>
        navigation.navigate("TweetDetails", {
          id: 2,
        })
      }
    />
  );
};

//Route provided by React Native component or we use the route hook
const TweetDetails = (props) => {
  return (
    <Screen>
      <Text>Tweet Details {props?.route.params?.id}</Text>
    </Screen>
  );
};

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue", color: "black" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name='Tweets'
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato", color: "black" },
        headerTintColor: "white",
      }}
    />
    <Stack.Screen
      options={({ route }) => ({
        title: route.params.name,
      })}
      name='TweetDetails'
      component={TweetDetails}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const Account = () => {
  return (
    <View>
      <Text>Hello world Account screen</Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name='Account' component={Account} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}
