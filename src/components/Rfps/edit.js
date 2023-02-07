import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const EditRfp = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="type" />
        <TextInput source="delivery_mode" />
        <TextInput source="status" />
      </SimpleForm>
    </Edit>
  );
};
