import { useEffect, useState } from "react";
import { Button, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "./src/components/Screen";
import ImageInput from "./src/components/ImageInput";
import ImageInputList from "./src/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((x) => x != uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
