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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#f8f4f4",
          padding: 20,
          paddingTop: 100,
          width: "100%",
        }}
      >
        <Card
          title='Jacket'
          subTitle='$100'
          image={require("./src/assets/jacket.jpg")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0%",
  },
});
