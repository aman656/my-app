import ImageInputList from "./ImageInputList";
import Error from "./Error";

import { useFormikContext } from "formik";

const FormImagePicker = ({ field }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageAdding = (uri) => {
    setFieldValue(field, [...imageuri, uri]);
  };
  const imageRemoving = (uri) => {
    setFieldValue(
      field,
      imageuri.filter((uris) => uris !== uri)
    );
  };
  const imageuri = values[field];
  return (
    <>
      <ImageInputList
        urilist={imageuri}
        Adding={imageAdding}
        Removing={imageRemoving}
      />
      <Error issue={errors[field]} show={touched[field]} />
    </>
  );
};

export default FormImagePicker;
