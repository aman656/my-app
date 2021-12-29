import { useFormikContext } from "formik";
import Error from "./Error";
import AppPicker from "./AppPicker";

const FormPicker = ({
  items,
  placeholder,
  field,
  PickerItemComponent,
  numofColumns,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        selecteditem={values[field]}
        onselection={(item) => setFieldValue(field, item)}
        PickerItemComponent={PickerItemComponent}
        numofColumns={numofColumns}
      />
      <Error issue={errors[field]} show={touched[field]} />
    </>
  );
};

export default FormPicker;
