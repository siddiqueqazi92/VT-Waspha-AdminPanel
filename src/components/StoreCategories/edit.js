import React from "react";
import {
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ImageInput,
  BooleanField,
  BooleanInput,
  Create,
  Edit,
} from "react-admin";
import { PreviewImage } from "../Common/Fields";
import RichTextInput from "ra-input-rich-text";
import { RESOURCES } from "../../constants";

export const EditStoreCategory = (props) => {
  return (
    <Edit {...props} title="ra.strings.edit_store_category">
      <SimpleForm
        redirect="show"

        // validate={validate}
      >
        <RichTextInput source="name" label="ra.strings.name_en" />
        <RichTextInput source="name_ar" label="ra.strings.name_ar" />

        <RichTextInput source="description" label="ra.strings.description_en" />
        <RichTextInput
          source="description_ar"
          label="ra.strings.description_ar"
        />
        {/* <ReferenceInput
          label="ra.strings.select_parent_category"
          source="parent_id"
          reference={RESOURCES.STORE_CATEGORIES}
          filter={{ id: [props.id] }}
          //filter={{ store_id: 17 }}
          // validate={validateVendor}
          emptyText="None"
        >
          <SelectInput optionText="display_name" />
        </ReferenceInput> */}
        <ImageInput source="image" label="ra.strings.image_en" accept="image/*">
          <PreviewImage source="image" />
        </ImageInput>
        <ImageInput
          source="image_ar"
          label="ra.strings.image_ar"
          accept="image/*"
        >
          <PreviewImage source="image_ar" />
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
