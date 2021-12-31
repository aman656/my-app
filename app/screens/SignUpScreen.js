import Fixing from "./Fixing";
import {
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
  LogBox,
} from "react-native";

import FormComponent from "../../components/FormComponent";

import FormButton from "../../components/FormButton";
import { authentication, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import * as Yup from "yup";
import WholeForm from "../../components/WholeForm";
import { useState } from "react/cjs/react.development";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("password"),
});

const collectionRef = collection(db, "app-users");

const SignUpScreen = ({ navigation }) => {
  LogBox.ignoreLogs(["Setting a timer"]);
  const [loading, setLoading] = useState(false);
  const getRandomProfile = async () => {
    const response = await fetch("http://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };
  const onCreating = async (username, email, password) => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        authentication,
        email,
        password
      );
      await addDoc(collectionRef, {
        id: user.user.uid,
        name: username,
        email: email,
        profilePic: await getRandomProfile(),
      });
      setLoading(false);
      navigation.navigate("login");
    } catch (err) {
      console.log(err);
      Alert.alert(err.message);
      setLoading(false);
    }
  };
  return (
    <Fixing style={styles.container}>
      {loading && (
        <ActivityIndicator
          animating={loading}
          color="#fc5c65"
          size={100}
          style={{ marginVertical: 250 }}
        />
      )}
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <WholeForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(value) =>
          onCreating(value.name, value.email, value.password)
        }
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
