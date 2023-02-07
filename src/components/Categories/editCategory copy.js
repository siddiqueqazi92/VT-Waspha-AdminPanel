import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  ImageInput,
  ImageField,
  TextInput,
} from "react-admin";

export const EditCategory = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" label="Category Name" />

        <TextInput source="description" multiline />
        <ReferenceInput
          label="Select Parent Category"
          source="parent_id1"
          reference="categories"
          allowEmpty
          filterToQuery={(searchText) => ({
            exclude: "id",
          })}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ImageInput source="image" label="Upload Image" accept="image/*">
          <ImageField source="image" title="Image" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};
