import * as React from "react";
import {
  TabbedForm,
  FormTab,
  Edit,
  Datagrid,
  TextField,
  DateField,
  TextInput,
  ReferenceManyField,
  NumberInput,
  DateInput,
  BooleanInput,
  EditButton,
  Create,
  ImageInput,
  ImageField,
} from "react-admin";

export const CreateCategory = (props) => (
  <Create {...props}>
    <TabbedForm validate={validate}>
      <FormTab label="ra.strings.en">
        <TextInput source="en" label="Name(en)" />
        <ImageInput source="image" label="Upload An Image" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
      </FormTab>
      <FormTab label="ra.strings.ar">
        <TextInput source="ar" label="Name(ar)" />
      </FormTab>
    </TabbedForm>
  </Create>
);
const validate = (values) => {
  const errors = {};
  const userName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
  const catSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  if (!values.en && !values.ar) {
    errors.en = ["Either En or Ar is required"];
    errors.ar = ["Either En or Ar is required"];
  }
  if (values.en && userName.test(values.en) === false) {
    errors.en = ["The name is invalid"];
  }
  if (values.slug && catSlug.test(values.slug) === false) {
    errors.slug = ["Only small letters and number"];
  }
  return errors;
};
