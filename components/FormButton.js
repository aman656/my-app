import OurButton from "./OurButton";
import { useFormikContext } from "formik";

const FormButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <OurButton title={title} onpress={handleSubmit} given="#fc5c65" />;
};

export default FormButton;
