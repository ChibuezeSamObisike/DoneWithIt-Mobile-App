import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";

import Screen from "../components/Screen";

import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select atleast one image"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  title: Yup.string().required().min(1).label("Title"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "red",
  },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "green" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "blue" },
  { label: "Games", value: 4, icon: "cards-outline", backgroundColor: "red" },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "green",
  },
  {
    label: "Sports",
    value: 6,
    icon: "basketball",
    backgroundColor: "blue",
  },
  {
    label: "Movies & Music",
    value: 7,
    icon: "music",
    backgroundColor: "red",
  },
  {
    label: "Books",
    value: 8,
    icon: "book-open-variant",
    backgroundColor: "green",
  },
  { label: "Others", value: 9, icon: "application", backgroundColor: "blue" },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          category: null,
          description: "",
          images: [],
          price: "",
          title: "",
        }}
        onSubmit={() => {
          console.log("Submiting...");
        }}
        validationSchema={validationSchema}
      >
        {/* <FormImagePicker name='images' /> */}
        <FormField
          autoCapitalize='sentences'
          autoCorrect
          placeholder='Title'
          name='title'
          maxLength={255}
        />
        <FormField
          placeholder='Price'
          name='price'
          keyboardType='numeric'
          maxLength={8}
          width={120}
        />
        <Picker
          data={categories}
          name='category'
          numberOfColumns={3}
          placeholder='Category'
          PickerItemComponent={CategoryPickerItem}
          width='50%'
        />
        <FormField
          autoCapitalize='sentences'
          autoCorrect
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
