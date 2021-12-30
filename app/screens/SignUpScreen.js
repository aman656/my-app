import Fixing from "./Fixing";
import { Image, StyleSheet } from "react-native";

import FormComponent from "../../components/FormComponent";

import FormButton from "../../components/FormButton";
import * as Yup from "yup";
import WholeForm from "../../components/WholeForm";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("password"),
});

const SignUpScreen = () => {
  return (
    <Fixing style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <WholeForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <>
          <FormComponent
            name="account"
            placeholder="UserName"
            field="name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormComponent
            name="email"
            placeholder="Email"
            keyboardType="email-address"
            field="email"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormComponent
            name="lock"
            field="password"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          <FormButton title="Sign Up" />
        </>
      </WholeForm>
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

export default SignUpScreen;
