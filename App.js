import { useEffect, useState } from "react";
import { Button, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "./src/components/Screen";
import ImageInput from "./src/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      alert("You need to enable permission");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image");
    }
  };
  return (
    <Screen>
      <Button title='Select Image' onPress={selectImage} />
      <Image
        source={{ uri: imageUri }}
        style={{ width: "130%", height: 400 }}
      />
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}
