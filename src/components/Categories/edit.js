import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ImageInput,
} from "react-admin";
import { PreviewImage } from "../Common/Fields";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

export const EditCategory = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm validate={validate} toolbar={<EditToolbarNoDeleteButton />}>
        <TextInput disabled source="id" />
        <TextInput source="en" label="Name(EN)" />
        <TextInput source="ar" label="Name(AR)" />

        <TextInput source="description" multiline />
        <ReferenceInput
          label="Select Parent"
          source="parent_id"
          reference="categories"
          // validate={validateVendor}
          emptyText="None"
        >
          <SelectInput optionText="en" />
        </ReferenceInput>

        <ImageInput source="image" label="Upload Image" accept="image/*">
          <PreviewImage source="image" />
        </ImageInput>

        <ImageInput
          source="secondary_image"
          label="Upload Secondary Image"
          accept="image/*"
        >
          <PreviewImage source="secondary_image" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};
// const validateType = required();
// const validateVendor = required();
// const validateRequired = required();

const validate = (values) => {
  const errors = {};
  const userName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;

  if (!values.en && !values.ar) {
    errors.en = ["Either En or Ar is required"];
    errors.ar = ["Either En or Ar is required"];
  }
  if (values.en && userName.test(values.en) === false) {
    errors.en = ["The name is invalid"];
  }

  return errors;
};
