import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const EditProvider = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="address" />
        <TextInput source="owner" />
      </SimpleForm>
    </Edit>
  );
};
