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
} from "react-admin";
import { PreviewImage } from "../Common/Fields";
import RichTextInput from "ra-input-rich-text";
import { RESOURCES } from "../../constants";
import { useFormState } from "react-final-form";
import { getQueryStringValue } from "../Common/Functions";

const StoreIdInput = (props) => {
  const { values } = useFormState();
  let filter = getQueryStringValue("filter");
  if (filter) {
    filter = JSON.parse(filter);
  }
  values.store_id = filter.store_id;
  return null;
};
export const CreateStoreProduct = (props) => {
  let filter = getQueryStringValue("filter");
  if (filter) {
    filter = JSON.parse(filter);
  }

  return (
    <Create {...props} title="ra.strings.create_store_product">
      <SimpleForm
        redirect="show"

        // validate={validate}
      >
        <TextInput source="title" label="ra.strings.title_en" />
        <TextInput source="title_ar" label="ra.strings.title_ar" />

        <RichTextInput source="description" label="ra.strings.description_en" />
        <RichTextInput
          source="description_ar"
          label="ra.strings.description_ar"
        />
        <ReferenceInput
          label="ra.strings.select_category"
          source="category_id"
          reference={RESOURCES.STORE_CATEGORIES}
          filter={{ store_id: filter.store_id }}
          // validate={validateVendor}
          emptyText="None"
        >
          <SelectInput optionText="display_name" />
        </ReferenceInput>
        <BooleanInput source="is_featured" />
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
        <StoreIdInput />
      </SimpleForm>
    </Create>
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
