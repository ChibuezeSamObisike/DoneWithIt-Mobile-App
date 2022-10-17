import React from "react";
import { StyleSheet } from "react-native";

import { useFormikContext } from "formik";

import AppButton from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

const styles = StyleSheet.create({});

export default SubmitButton;
