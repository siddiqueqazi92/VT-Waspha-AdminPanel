import React from "react";
import { Create, regex, required, SimpleForm, TextInput } from "react-admin";

export const CreateProvider = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={validateProviderName} />
        <TextInput source="address" validate={validateProviderAddress} />
        <TextInput source="owner" validate={validateOwnerName} />
      </SimpleForm>
    </Create>
  );
};

//validation
const validateProviderName = [
  required(),
  regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i, "Must be a valid name"),
];
const validateProviderAddress = [required()];
const validateOwnerName = [
  required(),
  regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i, "Must be a valid name"),
];
