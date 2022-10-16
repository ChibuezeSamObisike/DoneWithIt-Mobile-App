import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";

import * as Yup from "yup";

import { Formik } from "formik";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon='email'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          name='email'
          //Auto-fill for the cache
          textContentType='emailAddress'
          placeholder='email'
        />

        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          placeholder='password'
          name='password'
          secureTextEntry
          textContentType='emailAddress'
        />
        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
