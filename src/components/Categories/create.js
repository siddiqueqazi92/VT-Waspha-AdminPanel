import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ImageInput,
  ImageField,
  useRedirect,
  useNotify,
  useRefresh,
} from "react-admin";

export const CreateCategory = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  // const onSuccess = () => {
  //   notify(`Changes saved`);
  //   redirect("/categories");
  //   refresh();
  // };

  return (
    <div>
      <Create {...props}>
        <SimpleForm validate={validate} redirect="list">
          <TextInput source="en" label="Name(en)" />

          <TextInput source="ar" label="Name(ar)" />
          <ImageInput source="image" label="Upload An Image" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
          <ImageInput
            source="secondary_image"
            label="Upload An Secondary Image"
            accept="image/*"
          >
            <ImageField source="src" title="title" />
          </ImageInput>

          <TextInput source="description" multiline />
          <ReferenceInput
            label="Select Parent Category"
            source="parent_id"
            reference="categories"
            // filterToQuery={(searchText) => ({
            //   vendor_id: getQueryStringValue("vendor_id"),
            // })}
            sort={{ field: "createdAt", order: "DESC" }}
          >
            <SelectInput optionText="en" />
          </ReferenceInput>
          {/* <SelectInput source="country" choices={toChoices(countries)} />
          <CityInput source="cities" /> */}
        </SimpleForm>
      </Create>
    </div>
  );
};

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
