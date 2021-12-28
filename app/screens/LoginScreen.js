import Fixing from "./Fixing";
import AppInput from "../../components/AppInput";
import { Image, StyleSheet, Text } from "react-native";

import OurButton from "../../components/OurButton";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("password"),
});

const LoginScreen = () => {
  return (
    <Fixing style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppInput
              name="email"
              placeholder="Email"
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {touched.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <AppInput
              name="lock"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />
            {touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <OurButton title="Log In" onpress={handleSubmit} given="#fc5c65" />
          </>
        )}
      </Formik>
    </Fixing>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
});

export default LoginScreen;
