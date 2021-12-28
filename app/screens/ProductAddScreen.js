import FormComponent from "../../components/FormComponent";
import FormButton from "../../components/FormButton";
import Fixing from "./Fixing";
import * as Yup from "yup";
import WholeForm from "../../components/WholeForm";
import FormPicker from "../../components/FormPicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Electronic",
    value: 2,
  },
  {
    label: "Sports",
    value: 3,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(1000000).label("Price"),
  desc: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const ProductAddScreen = () => {
  return (
    <Fixing>
      <WholeForm
        validationSchema={validationSchema}
        initialValues={{ title: "", price: "", desc: "", category: null }}
        onSubmit={(values) => console.log(values)}
      >
        <FormComponent placeholder="Title" field="title" autoCorrect={false} />
        <FormComponent
          placeholder="Price"
          keyboardType="numeric"
          field="price"
          autoCorrect={false}
        />
        <FormPicker
          placeholder="Category"
          field="category"
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
