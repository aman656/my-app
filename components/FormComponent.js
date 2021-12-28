import AppInput from "./AppInput";
import Error from "./Error";
import { useFormikContext } from "formik";

const FormComponent = ({ field, ...other }) => {
  const { touched, setFieldTouched, handleChange, errors } = useFormikContext();
  return (
    <>
      <AppInput
        onChangeText={handleChange(field)}
        onBlur={() => setFieldTouched(field)}
        {...other}
      />
      <Error show={touched[field]} issue={errors[field]} />
    </>
  );
};

export default FormComponent;
