import React from "react";
import { Create, required, SimpleForm, TextInput } from "react-admin";

export const CreateRfp = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="type" validate={validateType} />
        <TextInput source="delivery_mode" validate={validateDeliveryMode} />
        <TextInput source="status" validate={validateStatus} />
      </SimpleForm>
    </Create>
  );
};

const validateType = required();
const validateDeliveryMode = required();
const validateStatus = required();
