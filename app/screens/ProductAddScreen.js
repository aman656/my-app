import FormComponent from "../../components/FormComponent";
import FormButton from "../../components/FormButton";
import Fixing from "./Fixing";
import * as Yup from "yup";
import WholeForm from "../../components/WholeForm";
import FormPicker from "../../components/FormPicker";
import CategoryPicker from "../../components/CategoryPicker";
import FormImagePicker from "../../components/FormImagePicker";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import listingsApi from "../api/listings";
import { db } from "../firebase";
import { LogBox } from "react-native";
import * as Notifications from "expo-notifications";

const categories = [
  {
    label: "Furniture",
    value: 1,
    color: "red",
    icon: "apps",
  },
  {
    label: "Electronic",
    value: 2,
    color: "green",
    icon: "email",
  },
  {
    label: "Sports",
    value: 3,
    color: "blue",
    icon: "lock",
  },
  {
    label: "Antique & Furnished",
    value: 4,
    color: "black",
    icon: "bed",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(1000000).label("Price"),
  desc: Yup.string().label("Description"),
  category: Yup.object().nullable().label("Category"),
  images: Yup.array().min(1, "Please select an image"),
});

const collectionRef = collection(db, "products");

const ProductAddScreen = () => {
  LogBox.ignoreLogs(["Setting a timer"]);
  const [getlocation, setLocation] = useState();

  useEffect(() => {
    const LocationGetting = async () => {
      const loc = await Location.requestBackgroundPermissionsAsync();
      if (!loc.granted) {
        return;
      } else {
        const {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });
        console.log(getlocation);
      }
    };
    LocationGetting();
  }, []);

  const submitHandler = async (value, actions) => {
    try {
      await addDoc(collectionRef, {
        title: value.title,
        price: value.price,
        category: "Furniture",
        description: value.desc,
        images: value.images,
        location: getlocation,
      });
      Notifications.presentNotificationAsync({
        title: "Aman",
        body: "Congratulations",
        data: {
          _displayInForeground: true,
        },
      });
      // alert("Submitted");
    } catch (err) {
      alert(err);
    }
    actions.resetForm();
  };

  return (
    <Fixing>
      <WholeForm
        validationSchema={validationSchema}
        initialValues={{
          title: "",
          price: "",
          desc: "",
          category: "Furniture",
          images: [],
        }}
        onSubmit={(value, actions) => submitHandler(value, actions)}
      >
        <FormImagePicker field="images" />
        <FormComponent placeholder="Title" field="title" autoCorrect={false} />
        <FormComponent
          placeholder="Price"
          keyboardType="numeric"
          field="price"
          autoCorrect={false}
        />
        <FormPicker
          placeholder="Category"
          PickerItemComponent={CategoryPicker}
          field="category"
          numofColumns={3}
          items={categories}
        />
        <FormComponent
          placeholder="Description"
          field="desc"
          multiline
          numberOfLines={3}
          autoCorrect={false}
        />

        <FormButton title="Submit" />
      </WholeForm>
    </Fixing>
  );
};

export default ProductAddScreen;
