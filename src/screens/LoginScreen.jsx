import React from "react";
import { StyleSheet, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

import { Formik } from "formik";

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              icon='email'
              autoCapitalize='none'
              onChangeText={handleChange("email")}
              autoCorrect={false}
              keyboardType='email-address'
              //Auto-fill for the cache
              textContentType='emailAddress'
              placeholder='email'
            />
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              placeholder='password'
              secureTextEntry
              onChangeText={handleChange("password")}
              textContentType='emailAddress'
            />

            <AppButton title='login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
