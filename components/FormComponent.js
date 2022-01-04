import AppInput from "./AppInput";
import Error from "./Error";
import { useFormikContext } from "formik";

const FormComponent = ({ field, ...other }) => {
  const {
    touched,
    setFieldTouched,
    handleChange,
    setFieldValue,
    errors,
    values,
  } = useFormikContext();
  return (
    <>
      <AppInput
        onChangeText={(text) => setFieldValue(field, text)}
        onBlur={() => setFieldTouched(field)}
        value={values[field]}
        {...other}
      />
      <Error show={touched[field]} issue={errors[field]} />
    </>
  );
};

export default FormComponent;
