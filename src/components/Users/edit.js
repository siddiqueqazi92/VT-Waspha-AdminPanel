import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm toolbar={<EditToolbarNoDeleteButton />}>
      <TextInput disabled source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
