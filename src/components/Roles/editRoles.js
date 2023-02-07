import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const EditRole = (props) => (
  <Edit title="Edit Role" {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="display_name" />
    </SimpleForm>
  </Edit>
);

export default EditRole;
