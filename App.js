import { useEffect, useState } from "react";
import { Button, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "./src/components/Screen";
import ImageInput from "./src/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
