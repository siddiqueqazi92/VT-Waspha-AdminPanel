import * as React from "react";
import { Create, regex, required, SimpleForm, TextInput } from "react-admin";

const CreateRole = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={validateRoleName} />
        <TextInput source="display_name" validate={validateDisplayName} />
      </SimpleForm>
    </Create>
  );
};

//validations
const validateRoleName = [
  required(),
  regex(/^[a-z]*$/i, "Must be a valid name"),
];

const validateDisplayName = [
  required(),
  regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i, "Must be a valid name"),
];

export default CreateRole;
